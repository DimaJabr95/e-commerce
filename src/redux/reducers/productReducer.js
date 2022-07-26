import { actionTypes } from "../constants/action-types";

const initialState = {
    products: [],
  }

export const productReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.SET_PRODUCTS:
        return {...state, products: action.payload};

    case actionTypes.FETCH_PRODUCTS:
      return {...state, products: action.payload};
    
     default:
        return state;

  }
}

// export const productReducer= (state = initialState, {type,payload}) => {
//     switch (type) {

//             case actionTypes.SET_PRODUCTS:
//                 return {...state, products: payload};
            
//              default:
//                 return state;
        
//           }
// }

