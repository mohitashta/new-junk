import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../Pages/dashboard/Dashboard'
import MenuSection from '../Pages/navLinks/menuSection/MenuSection'

const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/menu" element={<MenuSection />} />
            </Routes>
        </>
    )
}

export default AllRoutes