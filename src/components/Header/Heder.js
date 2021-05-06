import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Heder = () => {
    return (
        <header >
            <h5 style={{textAlign:'center'}}>Life Family</h5>
        <div className="navbar-custom">
        <Link to="/" className="menu-item">Doner</Link>
          <Link to="/registration" className="menu-item">Registration</Link>
        </div>
        </header>
    );
};

export default Heder;