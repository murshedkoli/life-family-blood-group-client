import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Heder = () => {
    return (
        <header >
            <h5 style={{textAlign:'center', color:'white'}}>Life Family</h5>
        <div className="navbar-custom">
        <Link to="/" className="menu-item">রক্ত দাতা</Link>
          <Link to="/registration" className="menu-item"> সদস্য নিবন্ধন </Link>
          <Link to="/info" className="menu-item"> তথ্য </Link>
        </div>
        </header>
    );
};

export default Heder;