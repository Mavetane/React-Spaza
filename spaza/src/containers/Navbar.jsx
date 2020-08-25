import React, { useEffect } from 'react'
import history from '../routes/history'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/auth'

const Navbar = () => {
  const isAuthorized = useSelector(state => state.isAuthorized)
  const dispatch = useDispatch()
  function refreshPage () {
    window.location.reload();
  }
  const navigatePage = (routeName) => {
    if (routeName == "logout") {
      dispatch(logout())
      return
    }
    history.push(routeName)
    refreshPage()
  }

  return (
    <div className="Navbar">
      {!isAuthorized ? <i class="fas fa-user-plus" onClick={() => navigatePage('signup')}></i> : null}
      {!isAuthorized ? <i class="fas fa-sign-in-alt" onClick={() => navigatePage('signin')}></i> : null}
      {isAuthorized ? <button onClick={() => navigatePage('logout')}> logout </button> : null}
    </div>
  )
}


export default Navbar