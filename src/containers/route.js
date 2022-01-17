import React from 'react'
import { Route , Routes } from "react-router-dom"
import Navbar from '../components/Navbar'

const route = () => {
    return (
        <div>
        <Routes>
            <Route exact path="/" element={<Navbar />} />
            <Route path="/add" element={<Navbar/>}/>
            <Route path="/edit/:id" element={<Navbar/>}/>
      </Routes>
        </div>
    )
}

export default route
