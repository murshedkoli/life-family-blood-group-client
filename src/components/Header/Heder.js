import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { HiMenu, HiOutlineX } from "react-icons/hi";
import './Sidebar.css'
import logo from '../../photos/logo.png';
import { Link } from 'react-router-dom';


const Heder = () => {


    const [show,setShow] = useState(false)

    const textDc = {textDecoration:'none', fontSize:'20px'}

    return (
        <header  >
            <Navbar bg="light" >
                <Navbar.Brand style={{fontSize:'30px', marginLeft:'20px', cursor:'pointer'}} > <HiMenu onClick={()=>setShow(true)}/> </Navbar.Brand>
                <h2 style={{position:'absolute', right:0, marginRight:'20px'}}><img style={{maxHeight:'60px'}} src={logo} alt="logo"/> Life Family</h2>
            </Navbar>
            {
                show && <div onClick={()=>setShow(false)} class="w3-sidebar w3-light-grey w3-bar-block" style={{width:'200px', transition: 'all 0.5s ease'
            }}>
                <h3 style={{cursor:'pointer'}} onClick={()=>setShow(false)} class="w3-bar-item"><HiOutlineX/></h3>
               <Link to="/" style={textDc}> <a href="/" className="w3-bar-item w3-button">হোম পেজ</a></Link>
                <Link to="registration" style={textDc}><a href="/registration" className="w3-bar-item w3-button">নিবন্ধন</a></Link>
                <Link to="info" style={textDc}><a href="info" className="w3-bar-item w3-button">কিছু তথ্য</a></Link>
            </div>
            }
        </header>
    );
};

export default Heder;