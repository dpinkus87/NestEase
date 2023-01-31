import React from 'react';



function Navbar({ currentPage, handlePageChange }) {
    return (
       <ul className='nav nav-tabs'>
        <li className='nav-items'>
            <a href='#Home'
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Product' ? 'nav-link active'
            : 'nav-link'}>Website Name</a>
        </li>
        <li className='nav-items'>
            <a href='#Products'
            onClick={() => handlePageChange('Product')}
            className={currentPage === 'Product' ? 'nav-link active'
            : 'nav-link'}>Products</a>
        </li>
        <li className='nav-items'>
            <a href='#Services'
            onClick={() => handlePageChange('Services')}
            className={currentPage === 'Services' ? 'nav-link active'
            : 'nav-link'}>Services</a>
        </li>
       </ul>
       
    );
};

export default Navbar;