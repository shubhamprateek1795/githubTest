import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
function privateComponent() {
    const authToken=sessionStorage.getItem("token")
  return authToken?<Outlet/>:<Navigate to="/login"/>
}

export default privateComponent