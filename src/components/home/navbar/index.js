import React from 'react';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import "./style.css"
import 'font-awesome/css/font-awesome.min.css';
import Categories from './categories';



const NavbarHeader = (props) => {
    return(
        <>
     <nav class="navbar">
        <div class="navbar-container container">
           
            <ul class="menu-items">
                <li className="headerStyle"><a href="#"><i class="icon-phone"></i> Call Center</a></li>
                <li className="headerStyle"><a href="#"><i class="icon-truck"></i> Shipping & Returnes</a></li>
               
            </ul>
            <h1 class="logo" style={{color: "#fd7e14"}}>Dealerz.</h1>
        </div>

        
        <Categories test = {props.test}/>
        
       
      
    </nav>

  

        </>
    )
}

export default NavbarHeader;