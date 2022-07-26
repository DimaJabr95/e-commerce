import React from "react";

const Footer = () => {
    return (
        <>
         <div className="container mb-5">
            <div className="row col-12">
               <div className="row col-4">
                   <img src='https://mdbootstrap.com/img/new/standard/city/041.webp'></img>
                </div>
            <div className="row col-4">
                <h1 style={{color:"#F86338"}}>Dealerz </h1>
                   <p>Privacy Policy</p>
                   <p>Terms and conditions</p>
                   <p>@2020</p>
            </div>

            <div className="row col-4">
                <ul class="menu-items" style= {{marginLeft: "-130px"}}>
                    <li class="nav-item pl-1">
					   <a class="nav-link" href="#"><i class="icon-youtube-play icons"></i></a>
				    </li>
                    <li class="nav-item pl-1">
					   <a class="nav-link" href="#"><i class="icon-facebook icons"></i></a>
				    </li>
                    <li class="nav-item pl-1">
					    <a class="nav-link" href="#"><i class="icon-twitter icons"></i></a>
				    </li>
                    <li class="nav-item pl-1">
					   <a class="nav-link" href="#"><i class="icon-instagram icons"></i></a>
				    </li>
                </ul>
            </div>
        </div>
    </div>
  

        </>
    )
}

export default Footer;