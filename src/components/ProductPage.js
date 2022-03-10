import axios from "axios";
import { useState, useEffect} from 'react';
import {getProductsAPICall} from '../Api';


const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const [deletedItems, setDeletedItems] = useState(0);

  useEffect(()=>{
    const getProductData = async () => {
      const productData = await getProductsAPICall();
      const actualProductData = productData.data.data
      setProductData(actualProductData);  
    }
    getProductData();
  },[deletedItems])

  const removeProduct = async (itemId) => {
    try {
      var res = await axios.delete(`http://localhost:3000/products/${itemId}`)
      console.log('Item successfully deleted.')
    } catch (error) {
      console.log("failure")
    }
  }
  
  return (
    <div className="row">
      {productData.map((item, index) => (
        <div className="card col-sm-12 col-lg-4 col-md-6 text-center">
          <img className="card-img-top" src={item.image} />
          <div className="card-body d-flex flex-column ">
            
            <div className="mt-auto">
            <h6 className="card-title">{item.name}</h6>
            <p className="card-text">${item.price}</p>
              <button className="btn btn-outline-success">Cart</button>
              <button className="btn btn-outline-success">List</button>
              <button className="btn btn-outline-success"onClick={() => {
                removeProduct(item._id)
                setDeletedItems(deletedItems + 1);
              }} >Delete</button>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
