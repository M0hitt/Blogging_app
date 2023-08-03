import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contentpage from './pages/Contentpage/Contentpage'
import Homepage from './pages/Homepage/Homepage'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element = {<Homepage/>}/>
        <Route path='/Content/:id' element= {<Contentpage/>}/>
    </Routes>
  )
}

export default Routers