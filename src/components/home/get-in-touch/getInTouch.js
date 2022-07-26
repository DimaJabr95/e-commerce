import React from "react"
import { Nav } from 'react-bootstrap';


const GetInTouch = () =>{
    return(
        <>
        <div className="container mb-5">
            <div className="row col-12">
               <div className="row col-6">
                   <img src='https://mdbootstrap.com/img/new/standard/city/041.webp'></img>
                </div>
                <div className="row col-6">
                   <h1>Story about our brand </h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                   <Nav.Link className="linkStyle" to="/*">Read full story</Nav.Link>

                </div>
            </div>
        </div>
  
        </>
    )
}

export default GetInTouch