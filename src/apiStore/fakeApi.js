import axios from 'axios';

export default axios.create({
    baseURL: "https://fakestoreapi.com/products?limit=5"
})