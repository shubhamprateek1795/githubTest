import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateComponent() {
    const authToken=sessionStorage.getItem("token")
  return authToken?<Outlet/>:<Navigate to={"/login"}/>
 
}

export default PrivateComponent