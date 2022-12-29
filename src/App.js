import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/UI/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <Outlet/>
    {/* <TransitionsModal/> */}
    </>
  )
}

export default App