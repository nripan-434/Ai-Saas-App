import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import Userhome from './pages/Userhome'
import ProtectedRoutes from './components/ProtectedRoutes'
const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <div className='flex-grow'>
        <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<ProtectedRoutes role='user'><Userhome/></ProtectedRoutes>}/>
      </Routes>
      </div>
      
      <Footer/>
    </div>
  )
}

export default App
