import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
import { HOME_ROUTE } from '../constants/routes';




const UnAuthLayout = () => {
    const {user} = useSelector((state)=>state.auth);   // from redux/store.js
    return (
      <div>
      {user ? <Navigate to={HOME_ROUTE}/> : <Outlet/>   }
      </div>
    )
}

export default UnAuthLayout