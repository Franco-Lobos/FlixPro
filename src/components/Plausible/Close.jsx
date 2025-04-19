

import { isDarkModeAtom } from "../../recoil/theme"
import { useZustand } from '../../store/useZustand'
import { useRecoilValue } from "recoil"
import CrossIcon from "../Icons/CrossIcon"
import colors from 'tailwindcss/colors'


export const Close = () => {
  const { closePlausible } = useZustand()
  const isDarkMode = useRecoilValue(isDarkModeAtom)

  return (
    <CrossIcon
      className='absolute w-8 h-8 cursor-pointer right-1 top-1'
      onClick={closePlausible}
      fill={colors.white}
    />
  )
}
