import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './components/Register'
import Home from './components/Home'
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
      <Route path='/fetch' element={<Fetch/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route>
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
