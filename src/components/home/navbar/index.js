import React from 'react';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import "./style.css"
import 'font-awesome/css/font-awesome.min.css';



const NavbarHeader = () => {
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

        <div class="navbar-container container">
            
            <ul class="menu-items" style= {{marginLeft: "-130px"}}>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Promo</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li class="ml-auto">
                <form className="d-flex">
                  <input
                    type="search"
                    placeholder="Search"
                    className="searchStyle"
                    aria-label="Search What you need"
                  />
						
					</form>
				</li>
                <li class="nav-item pl-1">
						<a class="nav-link" href="#"><i class="icon-gittip"></i></a>
				</li>
                <li class="nav-item pl-1">
						<a class="nav-link" href="#"><i class="icon-shopping-cart"></i></a>
				</li>
                <li class="nav-item pl-1">
						<a class="nav-link" href="#"><i class="icon-user"></i></a>
				</li>
                <li class="nav-item pl-1">
						<a class="nav-link" href="#"><i class="icon-bell"></i></a>
				</li>

            </ul>
         
        
        </div>

      
    </nav>

  

        </>
    )
}

export default NavbarHeader;