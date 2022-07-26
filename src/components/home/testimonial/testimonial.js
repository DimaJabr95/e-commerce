import React from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Carousel from 'react-bootstrap/Carousel';

const Testimonial = () => {
    return (
        <>
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
    
        </>
    )
}

export default Testimonial;