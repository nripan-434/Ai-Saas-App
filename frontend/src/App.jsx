import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Footer from './components/Footer'
import Login from './pages/Login'
const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <div className='flex-grow'>
        <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </div>
      
      <Footer/>
    </div>
  )
}

export default App
