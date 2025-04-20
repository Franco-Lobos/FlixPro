import CloseSvg from '../../assets/icons/close.svg'
import { useZustand } from '../../store/useZustand'
import { USE_PLAUSIBLE } from '../../utils/constants'
import { removeData } from '../../utils/mongo.db'
import { deleteSite } from '../../utils/plausible'
import clsx from 'clsx'
import { isDarkModeAtom } from '../../recoil/theme'
import { useRecoilValue } from 'recoil'


export const MenuItem = ({ index, menu }) => {
  const {
    selMenuIndex,
    setSelMenuIndex,
    menuArr,
    deleteMenu,
    setAlertMsg,
    onConfirm,
  } = useZustand()


  const isDarkMode = useRecoilValue(isDarkModeAtom)


  return (
    <div className={clsx(
      'flex items-center justify-center gap-2 p-2 text-gray-900 dark:text-white border-2 border-b-0 rounded-tl rounded-tr cursor-pointer',
      `${index === selMenuIndex
        ? isDarkMode ? 'border-white' : 'border-gray-900'
        : 'border-gray-500'
      }`,
    )}
    >
      <div onClick={() => setSelMenuIndex(index)}>{menu.domain}</div>
      <img
        className='w-4 h-4 bg-white cursor-pointer'
        src={CloseSvg}
        alt='Close'
        onClick={() => onConfirm(async () => {
          if (!menu.domain || !menu._id) {
            setAlertMsg('Menu info is incorrect.')
            return
          }

          const deleteSiteRes = await deleteSite(menu.domain)
          const removeDataRes = await removeData(menu._id)

          if (!removeDataRes || (!deleteSiteRes && USE_PLAUSIBLE)) {
            setAlertMsg('Site maybe not registered, or check your internet connection.')
            return
          }

          deleteMenu(index)

          if (index === selMenuIndex && index > menuArr.length - 2) {
            if (menuArr.length === 1) {
              setSelMenuIndex(null)
            } else {
              setSelMenuIndex(0)
            }
          }
        })}
      />
    </div >
  )
}
