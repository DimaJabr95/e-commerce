import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux";
import {
  fetchProducts,
  setProducts,
} from "../../../redux/actions/productActions";
import { Categories } from "../../../categories";

const CategoriesShop = (props) => {
  const [products, setProducts] = useState([]);
  const [foundProducts, setFoundProducts] = useState([]);
  const [sortType, setSortType] = useState("des");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data.slice(0, 6));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSort = (sortType) => {
    setSortType(sortType);
    console.log("dima");
  };
  const sortName = products.sort((a, B) => {
    const isLower = sortType === "inc" ? 1 : -1;
    return isLower * (a.price - B.price);
  });

  console.log(sortName);

  const filterResult = (catItem) => {
    const result = products.filter((product) => {
      return product.category === catItem;
    });

    setProducts(result);

    console.log("men", result);
  };

  const search = (keyword) => {
    console.log({ products });

    const results = products.filter((product) => {
      // Use the toLowerCase() method to make it case-insensitive
      return product.title.toLowerCase().includes(keyword.toLowerCase());
    });

    console.log(results);
  };

  if (props.search.length > 0) {
    search(props.search);
    console.log(props.search);
  }

  return (
    <>
      <div className="container mb-5">
        <h1 id="title">Our Premium Collection</h1>
        <nav className="navbar">
          <div className="navbar-container container">
            <ul className="menu-items">
              <li>
                <button
                  style={{ border: "none", backgroundColor: "transparent" }}
                  onClick={() => filterResult("")}
                >
                  All Products
                </button>
              </li>
              <li>
                <button
                  style={{ border: "none", backgroundColor: "transparent" }}
                  onClick={() => filterResult("men's clothing")}
                >
                  Coats & Jacket
                </button>
              </li>
              <li>
                <button
                  style={{ border: "none", backgroundColor: "transparent" }}
                  onClick={() => filterResult("men's clothing")}
                >
                  Dressed
                </button>
              </li>
              <li>
                <button  style={{ border: "none", backgroundColor: "transparent" }}
                  onClick={() => filterResult("men's clothing")}>Playsuit</button>
              </li>
              <li>
                <button  style={{ border: "none", backgroundColor: "transparent" }}
                  onClick={() => filterResult("men's clothing")}>Short</button>
              </li>
              <li>
                <button  style={{ border: "none", backgroundColor: "transparent" }}
                  onClick={() => filterResult("men's clothing")}>Skirt</button>
              </li>
              <li>
                <button  style={{ border: "none", backgroundColor: "transparent" }}
                  onClick={() => filterResult("men's clothing")}>T-Shirt</button>
              </li>
            </ul>
          </div>
        </nav>
        <button
          className="buttonStyle"
          onClick={() => onSort("inc")}
          style={{ marginRight: "30px" }}
        >
          {" "}
          Sorting From Lower Price
        </button>
        <button className="buttonStyle" onClick={() => onSort("des")}>
          {" "}
          Sorting From Higher Price
        </button>

        <section className="py-4 container" style={{ objectFit: "contain" }}>
          <div className="row justify-content-center">
            {sortName.map((product) => {
              return (
                <div
                  key={product.id}
                  className="col-11 col-md-6 col-lg-4 mx-0 mb-4"
                >
                  <div className="card p-0 overflow-hidden h-100 shadow">
                    <img
                      src={product.image}
                      className="card-img-top img-fluid"
                      style={{ height: "470px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-body">{product.description}</p>
                    </div>
                    <div
                      className="card-footer"
                      style={{ backgroundColor: "transparent", border: "none" }}
                    >
                      <button className="buttonArrow">
                        <i className="icon-circle-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* <ul>
      {products.map(product => <li key= {product.id}>{product.title}</li>)}
     </ul> */}
    </>
  );
};
export default CategoriesShop;
