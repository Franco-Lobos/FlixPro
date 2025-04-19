import { useAuth0 } from '@auth0/auth0-react'
import activityDetector from 'activity-detector'
import { useEffect } from 'react'
import { BillboardPage } from './components/BillboardPage'
import { Home } from './components/Home'
import { MBoard } from './components/MBoard/MBoard'
import { Menu } from './components/Menu/Menu'
import { Plausible } from './components/Plausible/Plausible'
import { Alert } from './components/Utils/Alert'
import { Confirm } from './components/Utils/Confirm'
import { Loading } from './components/Utils/Loading'
import { useZustand } from './store/useZustand'
import { customDebug } from './utils/custom.debug'
import { useRecoilValue } from 'recoil'
import { isDarkModeAtom } from './recoil/theme'
import clsx from 'clsx'
import { DARK_MODE_CLASS } from './utils/constants'


const App = () => {
  const { setIsLoading, setIsSeeingApp } = useZustand()
  const { isLoading } = useAuth0()

  const isDarkMode = useRecoilValue(isDarkModeAtom)

  useEffect(() => {
    setIsLoading(isLoading)
  }, [isLoading, setIsLoading])

  useEffect(() => {
    newActivityDetector.on('idle', () => {
      customDebug().log('App#useEffect: user idle')
      setIsSeeingApp(false)
    })
    newActivityDetector.on('active', () => {
      customDebug().log('App#useEffect: user active')
      setIsSeeingApp(true)
    })
  }, [])



  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add(DARK_MODE_CLASS);
    } else {
      document.body.classList.remove(DARK_MODE_CLASS);
    }
  }, [isDarkMode]);


  return (
    <div className={clsx(`relative flex flex-col w-screen h-screen `)}>
      <Menu />
      <div className='relative w-full h-[calc(100vh-3rem)]'>
        <BillboardPage />
        <MBoard />
        <Home />
      </div>
      <Plausible />
      <Confirm />
      <Alert />
      <Loading />
    </div>
  )
}

const newActivityDetector = activityDetector({
  timeToIdle: 600000,
})

export default App
