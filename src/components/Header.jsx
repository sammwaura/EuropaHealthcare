import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id="main">
        <Navbar/>
        <div className='name'>
            <h1><span>Great Pharmaceutical</span>Products for you</h1>
            <p className='details'>A leading pharmaceutical marketing firm that consistently work towards
            high levels of transparency, accountability and constant value systems in all facets of our operations.</p>
            <a href= '#' className='cv-btn'>Consult Now</a>
        </div>
      
    </div>
  )
}

export default Header
