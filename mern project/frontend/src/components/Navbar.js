import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate=useNavigate()
  const authToken = sessionStorage.getItem("token")
  const email=sessionStorage.getItem("email")
  const logout=()=>{
    sessionStorage.clear()
    navigate("/login")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">MERN APPLICATION</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {
              authToken ?
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         
                  <li className="nav-item">
                    <Link className="nav-link" to="/fetch">fetch all</Link>
                  </li>
                  <li className="nav-item">
                   <button className='btn btn-primary' onClick={logout}>Logout || {email}</button>
                  </li>

                </ul>
                :
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">HomePage</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Registration page</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>

                </ul>
            }

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar