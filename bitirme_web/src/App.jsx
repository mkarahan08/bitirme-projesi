import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import RouterConfig from './config/RouterConfig'
import CategoryBar from './components/CategoryBar/CategoryBar'


function App() {

  return (
    <>
        <Navbar/>
        <CategoryBar/>
        <RouterConfig/>
    </>
  )
}

export default App
