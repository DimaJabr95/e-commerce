import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'font-awesome/css/font-awesome.min.css';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/esm/Button';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <>

     <div className="container-fluid mb-5">
     <Home/>
     </div>

     <div className="container mb-5">
       <div className="row">
         <div className="row col-6"></div>
         <div className="row col-6">
          <h2><strong>Your Premium Sound, Unplugged</strong></h2>
          <p className="topItemStyle">"Lorem ipsum dolor.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <button  className="buttonStyle">Find Out More</button>
         </div>

       </div>
     </div>

     <div className="container mb-5">
     <h1 id="title">Our Premium Collection</h1>
     <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="#">All Products</a></li>
                <li><a href="#">Coats & Jacket</a></li>
                <li><a href="#">Dressed</a></li>
                <li><a href="#">Playsuit</a></li>
                <li><a href="#">Short</a></li>
                <li><a href="#">Skirt</a></li>
                <li><a href="#">T-Shirt</a></li>

            </ul>
            {/* <h1 class="logo">Navbar</h1> */}
        </div>
    </nav>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{margin:"auto"}}>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Category Dress</MDBCardTitle>
            <MDBCardText>
              <h3>Tropical Suit</h3>
            </MDBCardText>
            <button className="buttonArrow"><i class="icon-circle-arrow-right"></i></button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Category Dress</MDBCardTitle>
            <MDBCardText>
              <h3>Tropical Suit</h3>
            </MDBCardText>
            <button className="buttonArrow"><i class="icon-circle-arrow-right"></i></button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Category Dress</MDBCardTitle>
            <MDBCardText>
               <h3>Tropical Suit</h3>
            </MDBCardText>
          <button className="buttonArrow"><i class="icon-circle-arrow-right"></i></button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Category Dress</MDBCardTitle>
            <MDBCardText>
              <h3>Tropical Suit</h3>
            </MDBCardText>
          <button className="buttonArrow"><i class="icon-circle-arrow-right"></i></button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Category Dress</MDBCardTitle>
            <MDBCardText>
                  <h3>Tropical Suit</h3>
            </MDBCardText>
          <button className="buttonArrow"><i class="icon-circle-arrow-right"></i></button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Category Dress</MDBCardTitle>
            <MDBCardText>
            <h3>Tropical Suit</h3>
            </MDBCardText>
          <button className="buttonArrow"><i class="icon-circle-arrow-right"></i></button>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <br/>
      <button className="buttonStyle" style={{margin:"auto"}}>Find out more</button>

      
    </MDBRow>
     </div>

    
    <div className="container mb-5">
    <h1 id="title">Top Items</h1>
    <p className="topItemStyle">"Lorem ipsum dolor.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    
    <Carousel>
      <Carousel.Item>
       
      <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{margin:"auto"}}>

      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody className="cardBody">
            {/* <MDBCardTitle>Tracksuit Hyped</MDBCardTitle> */}
            <MDBCardText>
              <h3>Tracksuit Hyped</h3>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className="cardBody">
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody className="cardBody">
            <MDBCardText>
              <h3>Tracksuit Hyped</h3>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody className="cardBody">
            <MDBCardText>
               <h3>Tracksuit Hyped</h3>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
     
      <br/>

      
    </MDBRow>
    </Carousel.Item>
        <Carousel.Item>
       
      <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{margin:"auto"}}>
        
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody className="cardBody">
            <MDBCardText>
              <h3>Tracksuit Hyped</h3>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody className="cardBody">
            <MDBCardText>
              <h3>Tracksuit Hyped</h3>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody className="cardBody">
            <MDBCardText>
               <h3>Tracksuit Hyped</h3>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
      
    </MDBRow>
    </Carousel.Item>

    </Carousel>
    </div>
   

   

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
  


    <div className= "container mb-5">
      <h1 style={{textAlign: "center"}}>Our Achievements</h1>

      
      <div className="row col-12" style={{justifyContent: "center"}}>
      <div className="row col-2"><a href="#">logo1</a></div>
      <div className="row col-2"><a href="#">logo1</a></div>
      <div className="row col-2"><a href="#">logo1</a></div>
      <div className="row col-2"><a href="#">logo1</a></div>
      <div className="row col-2"><a href="#">logo1</a></div>
      <div className="row col-2"><a href="#">logo1</a></div>

      </div>
    </div>
    <br/>

    <div className="container mb-5">
    <Carousel>
      <Carousel.Item>
       
        <MDBCard>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' 
                        alt='...' fluid
                        style = {{padding: "81px"}} />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle style={{textAlign:"center", color:"#F86338"}}>Good Seller</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'><strong>Anna Sarapnova</strong></small>
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Your beloved Buyer</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
        </MDBCard>
   
    </Carousel.Item>

        <Carousel.Item>
       
        <MDBCard>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' 
                        alt='...' fluid
                        style = {{padding: "81px"}} />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle style={{textAlign:"center", color:"#F86338"}}>Good Seller</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'><strong>Anna Sarapnova</strong></small>
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Your beloved Buyer</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
        </MDBCard>
    </Carousel.Item>

    </Carousel>
    </div>
    
    <div className="container mb-5">
      <div className="row">
        <div className="row col-6">
           <h3>Get Better Insights From Our Articles</h3>
        </div>
        <div className="row col-6">
         <Nav.Link style={{textAlign:"end"}}>See More</Nav.Link>
        </div>

      <div className="row col-6">
        <img src='https://mdbootstrap.com/img/new/standard/city/041.webp'></img>
        <h1>Best Summer Outfit Style </h1>
        <p>Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <Nav.Link to="/*" className="linkStyle">Explore More</Nav.Link>
      </div>

      <div className="row col-6">
        <img src='https://mdbootstrap.com/img/new/standard/city/041.webp'></img>
        <h1>Best Summer Outfit Style </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <Nav.Link className="linkStyle" to="/*">Explore More</Nav.Link>
      </div>
     
      <div className="row col-6">
        <img src='https://mdbootstrap.com/img/new/standard/city/041.webp'></img>
        <h1>Best Summer Outfit Style</h1>
        <p>Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <Nav.Link className="linkStyle" to="/*">Explore More</Nav.Link>
      </div>
     
      <div className="row col-6">
        <img src='https://mdbootstrap.com/img/new/standard/city/041.webp'></img>
        <h1> Best Summer Outfit Style</h1>
        <p>Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <Nav.Link className="linkStyle" to="/*">Explore More</Nav.Link>
      </div>
     
     


      </div>

    </div>
    <br/>

    <div className="container mb-5">
      <div className="row">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Text className="text-muted">
            <div className="row" style={{textAlign: "center"}}>
              <h3><strong>Join Our News Letter</strong></h3>
            </div>
            <div className="row" style={{textAlign: "center"}}>
                <p style={{ border: "none",paddingLeft: "300px", paddingRight: "300px"}}>
                  Lorem ipsum dolor sit amet, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>

          </Form.Text>
          <div className="row" style={{justifyContent: "center"}}>
          <Form.Control type="email"
                        placeholder="Insert your email here"
                        style= {{textAlign:"inherit" ,
                                 width: "645px",
                                 paddingTop: "27px",
                                 paddingBottom: "27px",
                                 paddingLeft: "26px"}} />
          </div>
          

        
          
         
      </Form.Group>

    
   </Form>
      </div>
    </div>

     
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
  );
}

export default App;
