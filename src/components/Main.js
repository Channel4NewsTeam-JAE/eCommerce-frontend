import axios from "axios";
import { useState } from "react";
import {Link} from 'react-router-dom';
import "../styles/main.css";
import {
  getProductsAPICall,
  postProductAPICall,
  putProductAPICall,
  patchProductAPICall,
  deleteProductAPICall,
} from "./../Api.js";


const Main = () => {
    
  return (
    <div className="main-body container">
        <div className="btn main-btn"><Link to="/products">Buyer</Link></div>
        <div className="btn main-btn"><Link to="/products/form">Seller</Link></div>
    </div>
  );
};

export default Main;
