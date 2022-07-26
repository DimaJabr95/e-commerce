import {combineReducers} from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({

    // allProducts: productReducer,
    products: productReducer,

})

export default reducers;