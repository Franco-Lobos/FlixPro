import { useAuth0 } from '@auth0/auth0-react'
import { useZustand } from '../store/useZustand'


export const Home = () => {
  const { menuArr } = useZustand()
  const { isAuthenticated } = useAuth0()

  return (
    !isAuthenticated ||
    !menuArr.length
  ) && (
      <div className='absolute z-10 flex flex-col items-center justify-center w-full h-full text-center  text-gray-900 bg-white dark:bg-gray-900 dark:text-white text-8xl'>
        {
          !isAuthenticated ?
            <div>Please log in to analyze websites</div> :
            !menuArr.length ?
              <div>Click the &quot;+&quot; to add a site</div> :
              <div />
        }
      </div>
    )
}
