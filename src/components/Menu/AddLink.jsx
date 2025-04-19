import { isDarkModeAtom } from "../../recoil/theme"
import AddIcon from "../Icons/AddIcon"
import { useRecoilValue } from "recoil"
import { useZustand } from "../../store/useZustand"
import colors from 'tailwindcss/colors'

export const AddLink = () => {
  const { nextPlausibleStep } = useZustand()

  const isDarkMode = useRecoilValue(isDarkModeAtom)

  return (
    <AddIcon
      className='h-full cursor-pointer'
      onClick={nextPlausibleStep}
      fill={isDarkMode ? colors.white : colors.gray[900]}
    />
  )
}
