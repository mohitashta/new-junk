import React from 'react'
import Footer from '../footer/Footer'
import MenuSection from '../navLinks/menuSection/MenuSection'
import NavLinks from '../navLinks/NavLinks'
import NavSection from '../navSection/NavSection'

const Dashboard = () => {
    return (
        <div>
            <NavSection />
            <NavLinks />
            <Footer />
        </div>
    )
}

export default Dashboard