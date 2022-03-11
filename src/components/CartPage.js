import { useState, useEffect } from "react";
import { getPurchasesAPICall, putPurchasesAPICall } from "./../Api";

const CartPage = () => {
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const getCartData = async () => {
      const cartData = await getPurchasesAPICall();
      const actualCartData = cartData.data.data[0].products;
      const totalPriceData = cartData.data.data[0].totalPrice;
      setCartData(actualCartData);
      setTotalPrice(totalPriceData);
    };
    getCartData();
  }, []);

  useEffect(() => {
    updatePurchase(cartData)
   
  },[JSON.stringify(cartData)])
  
  const handleDeleteClick = (item) => {
    const didNotRemoveItems = cartData.filter(product => product._id !== item._id);
  
    setCartData(() => {
      const addedItemToCart = didNotRemoveItems
      return addedItemToCart
    })
  }


  const updatePurchase = async (cart) => {
    let priceSum = 0;
    let itemIDs = []
    
    for (let i = 0; i < cart.length; i++) {
      priceSum += cart[i].price
      itemIDs.push(cart[i]._id)
    }    

    const purchase = await getPurchasesAPICall()
    const purchaseID = purchase.data.data[0]._id
  
    await putPurchasesAPICall({
      id: purchaseID,
      totalPrice: priceSum,
      paid: false,
      products: itemIDs
    })
  }
  
  if (cartData) {
    return (
      <div className="row">
        {cartData.map((item) => (
          <div className="card col-12 text-center" key={item._id}>
            <div className="card-body row">
              <div className='cart-item-name col-6'>{item.name}</div>
              <div className='cart-item-price col-5'>{item.price}</div>
              <button 
              onClick={() =>{handleDeleteClick(item)}}
              className='cart-item-delete btn-danger col-1'>Delete</button>
            </div>
          </div>
        ))}
        {cartData.length > 0 && <div className="row">
          <h5 className="col-6 text-end ">Total Price: </h5>
          <div className="col-6 text-center">{totalPrice.toFixed(2)}</div>
        </div>}
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default CartPage;
