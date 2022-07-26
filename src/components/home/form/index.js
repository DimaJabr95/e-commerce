import React from "react";
import Form from 'react-bootstrap/Form';


const FormEmail = () => {
    return (
        <>
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

        </>
    )
}

export default FormEmail;