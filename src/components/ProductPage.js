import axios from "axios";
import { useState, useEffect } from "react";
import { getProductsAPICall, postPurchasesAPICall, putPurchasesAPICall, getPurchasesAPICall } from "./../Api";
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

  useEffect(() => {
    addToPurchase(cartItems)
  },[JSON.stringify(cartItems)])

  const removeProduct = async (itemId) => {
    try {
      var res = await axios.delete(`http://localhost:3000/products/${itemId}`);
      console.log("Item successfully deleted.");
    } catch (error) {
      console.log("failure");
    }
  };
 
  // Takes in Item on CART click and adds it to state variable caryItems.
  const handleClick = (item) => {
    console.log("ITEM IS: ", item);
    

    setCartItems((prevState) => {
      const addedItemToCart = [item, ...prevState]
      return addedItemToCart
    })
  
  }

  // Calculates totalPrice of items in cart, gets itemIDS, and runs POST api call
  // IF cartItems.length === 1
  const addToPurchase = async (cart) => {
    console.log("CART: ", cart)
    let priceSum = 0;
    let itemIDs = []
    

    for (let i = 0; i < cart.length; i++) {
      priceSum += cart[i].price
      itemIDs.push(cart[i]._id)
    }    
    if(cart.length < 1) {
      return
    }
    else if(cart.length === 1) {
      console.log("posted data")
      await postPurchasesAPICall({
        totalPrice: priceSum,
        paid: false,
        products: itemIDs
      })
    } else {
      const purchase = await getPurchasesAPICall()
      const purchaseID = purchase.data.data[0]._id
      console.log("PURCHASE: ", purchase.data.data)

      await putPurchasesAPICall({
        id: purchaseID,
        totalPrice: priceSum,
        paid: false,
        products: itemIDs
      })
    }
  }

  return (
    <div className="container">
      <Search />
      <div className="row card-columns">
        {productData.map((item) => (
          <div key={item._id} className="card col-sm-12 col-lg-4 col-md-6 text-center">
            <img className="card-img-top" src={item.image} />
            <div className="card-body d-flex flex-column ">
              <div className="mt-auto">
                <h6 className="card-title">{item.name}</h6>
                <p className="card-text">${item.price}</p>
                <button onClick={() => {handleClick(item)}} className="btn btn-success">
                  Cart
                </button>
                <button
                  className="btn btn-success"
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
