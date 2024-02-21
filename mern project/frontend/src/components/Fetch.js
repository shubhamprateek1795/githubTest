
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Fetch() {
  const [usersData, setUsersData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    await axios.get('http://localhost:5000/fetch')
      .then((res) => {
        // console.log(res.data)
        setUsersData(res.data)
      })
     .catch(()=>{
      console.log("api call error")
     })
  }
  const deleteData = async(id) => {
    // console.log(id)
    let del = await axios.delete(`http://localhost:5000/delete/${id}`, {
      method: 'DELETE',
    });
    if (del) {
      fetchData()
    }
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope='col' >#</th>
            <th scope='col' >name</th>
            <th scope='col'>email</th>
            <th scope='col' >mobile</th>
            <th scope='col'>address</th>
            <th scope='col'>action</th>
          </tr>
        </thead>
        <tbody>
          {
            usersData.map((u, i) =>
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.mobile}</td>
                <td>{u.address}</td>
                <td>
                  <button className='btn btn-danger' onClick={() => deleteData(u._id)}>delete</button>
                 <Link to={"/update/" + u._id}><button className='btn btn-warning' >update</button></Link> 

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