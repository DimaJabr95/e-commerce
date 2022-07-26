import React, {useState, useEffect} from "react";
import { Nav } from 'react-bootstrap';
import axios from 'axios';


const Blogs = () => {

  const [items,setItems] = useState([]);

  useEffect(() => {
     axios.get('https://fakestoreapi.com/products?limit=4')
          .then( res => {
            console.log(res)
            setItems(res.data)
          })
          .catch( err => {
            console.log(err)
          })
  }, [])
    return (
        <>
         <div className="container mb-5">
      <div className="row">
        <div className="row col-6">
           <h3>Get Better Insights From Our Articles</h3>
        </div>
        <div className="row col-6">
         <Nav.Link style={{textAlign:"end"}}>See More</Nav.Link>
        </div>

        <section className="py-4 container">
      <div className="row justify-content-center">
      { items.map( item=> {
       return(

        <div key={item.id} 
             className= "col-11 col-md-6 col-lg-6 mx-0 mb-4"
             >
            <img src={item.image} className="card-img-top img-fluid"
                 style={{height: "470px"}}/>
               <h1>Best Summer Outfit Style </h1>
           <p>{item.description}</p>
             

        </div>
       )
    })}
      </div>
    </section>
  

     

       

        
      

      {/* <div className="row col-6">
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
      */}
     


      </div>

    </div>
        </>
    )
}

export default Blogs;