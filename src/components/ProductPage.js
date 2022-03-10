import axios from "axios";
import { useState, useEffect } from "react";
import { getProductsAPICall, postPurchasesAPICall, putPurchasesAPICall, getPurchasesAPICall } from "../Api";
import Search from "./Search";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const [deletedItems, setDeletedItems] = useState(0);
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const getProductData = async () => {
      const productData = await getProductsAPICall();
      const actualProductData = productData.data.data;
      setProductData(actualProductData);
    };
    getProductData();
  }, [deletedItems]);

  const removeProduct = async (itemId) => {
    try {
      var res = await axios.delete(`http://localhost:3000/products/${itemId}`);
      console.log("Item successfully deleted.");
    } catch (error) {
      console.log("failure");
    }
  };

  const handleClick = (item) => {

    const cartCopy = cartItems.slice()
    cartCopy.push(item)
    setCartItems(cartCopy)
    // console.log(cartItems)
    addToPurchase(cartItems)
  }

  const addToPurchase = async (cart) => {
    console.log("CART: ", cart)
    let priceSum = 0;
    let itemIDs = []
    

    for (let i = 0; i < cart.length; i++) {
      priceSum += cart[i].price
      itemIDs.push(cart[i]._id)
    }    

    if (cartItems.length === 1) {
      await postPurchasesAPICall({
        totalPrice: priceSum,
        paid: false,
        products: itemIDs
      })
    } else {
      const purchase = await getPurchasesAPICall()
      
      console.log("PURCHASE: ", purchase)

      // await putPurchasesAPICall({
        
      //   totalPrice: priceSum,
      //   paid: false,
      //   products: itemIDs
      // })
    }
  }


//   const purchaseSchema = new mongoose.Schema({
//     totalPrice: Number,
//     paid: Boolean,
//     products: [{type: mongoose.Schema.Types.ObjectId, ref:'Product'}]
// })


  return (
    <div className="container">
      <Search />
      <div className="row card-columns">
        {productData.map((item) => (
          <div key={item._id} onClick={() =>  {handleClick(item)}} className="card col-sm-12 col-lg-4 col-md-6 text-center">
            <img className="card-img-top" src={item.image} />
            <div className="card-body d-flex flex-column ">
              <div className="mt-auto">
                <h6 className="card-title">{item.name}</h6>
                <p className="card-text">${item.price}</p>
                <button onClick={handleClick} className="btn btn-outline-success">
                  Cart
                </button>
                <button className="btn btn-outline-success">List</button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    removeProduct(item._id);
                    setDeletedItems(deletedItems + 1);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
