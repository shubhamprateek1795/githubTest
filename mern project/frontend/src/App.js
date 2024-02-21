import React from 'react'
import{BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './components/Home'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Fetch from './components/Fetch'
import Update from './components/Update'
import Login from './components/Login'
import PrivateComponent from './components/PrivateComponent'

function App() {
  return (
  <>

  <BrowserRouter>
  <Navbar/>
<Routes>
  <Route element={<PrivateComponent/>}>
  <Route path='/update/:id' element={<Update/>}></Route>
  <Route path='/fetch' element={<Fetch/>}></Route>
  </Route>
<Route path='/' element={<Home/>}></Route>
<Route path='/register' element={<Register/>}></Route>

<Route path='/login' element={<Login/>}></Route>

</Routes>
 </BrowserRouter>
  </>

  )
}

export default App