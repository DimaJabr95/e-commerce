import axios from "axios";
import fakeApi from "../../apiStore/fakeApi";
import { actionTypes } from "../constants/action-types";

// export const fetchProducts =  () => async (dispatch) => {

    
//   const response = await fakeApi.get('/');
//   dispatch({type: actionTypes.FETCH_PRODUCTS,
//             payload: fetchProducts(response.data)})
  
//   };

const fetchProductsStart = () => ({
  type:actionTypes.FETCH_PRODUCTS
})

export function fetchProducts  ()  {
  return function (dispatch) {
    dispatch(fetchProductsStart());
    axios.get("https://fakestoreapi.com/products?limit=5")
         .then (response => {
          const products = response.data;
          dispatch(setProducts(products));
         }).catch((error) => {
          console.log(error)
         })
  }
}

  

export const setProducts = (products) =>  {
  
    
   return {
    type: actionTypes.SET_PRODUCTS,
    payload: products
   }
  
  
   
};



export const selectedProduct = (product) => {
    return {
  
      type: actionTypes.SELECTED_PRODUCT,
      payload: product
    
    }
     
  };

//   export const fetchProducts = (products) => (dispatch) => {
//     fetch("https://fakestoreapi.com/products")
//     .then(data => {
//         return {
//             type: actionTypes.SET_PRODUCTS,
//             payload: products.data
//         }
//     })
   
//   }

  export const filterProduct = (products) =>  {
    // fetch("https://fakestoreapi.com/products")
    //      .then(res => {console.log(res.data)})
    return {
        type: actionTypes.FILTER_PRODUCT,
        payload: products
    }
  }

//   export const removeSelectedProduct = (product) => {
//     return {
  
//       type: actionTypes.REMOVE_SELECTED_PRODUCT,
//       payload: product
    
//     }
     
//   }