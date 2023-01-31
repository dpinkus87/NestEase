import React, { useState } from 'react';
import Navigation from './Navbar';
import Products from '../pages/Product';
import Services from '../pages/Services';
import LandingPage from '../pages/LandingPage'
import Navbar from './Navbar';

export default function Header() {
    const [currentPage, setCurrentPage] = useState('LandingPage');

    const renderPage = () => {
        if(currentPage === 'Home') {
            return <LandingPage />;
        }
        if(currentPage === 'Products') {
            return <Products />;
        }
        if(currentPage === 'Services') {
            return <Services />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} 
            handlePageChange={handlePageChange} 
            />
            {renderPage()}
        </div>
    )
}