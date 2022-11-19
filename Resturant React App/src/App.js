import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Menu from './components/Menu'
import Nav from './components/Nav'
import Home from './components/Home'
import Booking from './components/Booking'
import NotFound from './components/NotFound'

function App() {
  return (
   <>
   <BrowserRouter>
   <Nav/>
   
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/menu' element={<Menu/>}></Route>
    <Route path='/booking' element={<Booking/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
    </Routes>  
   </BrowserRouter>
   </>
  )
}

export default App
