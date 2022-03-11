import axios from "axios";
import { useState } from "react";
import {Link} from 'react-router-dom';
import "./../styles/main.css";
import {
  getProductsAPICall,
  postProductAPICall,
  putProductAPICall,
  patchProductAPICall,
  deleteProductAPICall,
} from "./../Api.js";


const Main = () => {
    
  return (
    <div className="main-body">
        <div className="btn main-btn"><Link to="/Products">Buyer</Link></div>
        <div className="btn main-btn"><Link to="/Products/form">Seller</Link></div>
    </div>
  );
};

export default Main;