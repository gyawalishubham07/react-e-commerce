import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { useSelector } from 'react-redux';
import { LOGIN_ROUTE } from '../constants/routes';
import Footer from '../components/Footer';

// Those contant which are remains in every page at same place use this function to implement
const MainLayout = () => {
  const {user} = useSelector((state)=>state.auth);   // from redux/store.js

  return (
    <div>
        <Header/>
        {/* If u want to show the data of childer Route then use this "Outlet" element */}
        
    <Outlet/>   
    <Footer/>
    </div>
  )
}

export default MainLayout