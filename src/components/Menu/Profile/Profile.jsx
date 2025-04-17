import { useAuth0 } from '@auth0/auth0-react'

import ProfileMenu from './ProfileMenu'

export const Profile = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()

  const logoutWithRedirect = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    })
  }

  return (
    <div className='flex items-center justify-center h-full gap-2 p-2 text-white'>

      {isAuthenticated ?
        <ProfileMenu /> :
        <button
          className='pl-2 pr-2 border-2 rounded'
          onClick={loginWithRedirect}
        >
          Log in
        </button>
      }
    </div>
  )
}
