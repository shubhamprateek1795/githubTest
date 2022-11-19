import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const redirect=useNavigate()
    const red=()=>{
        redirect("/")
    }
  return (
   <>
   <h1 className='display-6'>error page not found</h1>
   <button className='btn btn-danger' onClick={red}>go to homepage</button>
   </>
  )
}

export default NotFound