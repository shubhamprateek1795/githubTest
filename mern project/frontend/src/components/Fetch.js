import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
function Fetch() {
    const[userData,setUserData]=useState([])
    useEffect(()=>{
      fetchData()
    },[])
    const fetchData= async()=>{
      await axios.get("http://localhost:5000/fetch")
      .then((response)=>{
        console.log(response.data)
        setUserData(response.data)
      })
      .catch(()=>{console.log("api call error")})
    }
    const deleteData=async(id)=>{
      // console.log(id)
       let del=await axios.delete(`http://localhost:5000/delete/${id}`, {
      method: 'DELETE',
});
if(del){
  fetchData()
}
    }
  return (
    <>
    <table className="table">
  <thead>
    <tr>
      <th>Sr no.</th>
      <th>Name</th> 
      <th>Email</th>
      <th>Mobile</th>
      <th>Address</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      userData.map((u,i)=>
      <tr key={i}>
      <th>{i+1}</th>
      <td>{u.name}</td> 
      <td>{u.email}</td>
      <td>{u.mobile}</td>
      <td>{u.address}</td>
      <td>

      <button className='btn btn-danger' onClick={()=>deleteData(u._id)}>Delete</button>
      <Link to={"/update/"+ u._id }><button className='btn btn-warning'>update</button></Link>
      
      </td>
    </tr>
      )
    }


  </tbody>
</table>
    </>
  )
}

export default Fetch