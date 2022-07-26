import React from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Carousel from 'react-bootstrap/Carousel';

const FlashSale = () => {
    return (
        <>
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
   
        </>
    )
}

export default FlashSale;