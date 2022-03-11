// import axios from "axios";
import { useState, useEffect } from 'react';
import { getPurchasesAPICall } from "./../Api";


const CartPage = () => {
    const [cartData, setCartData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    // const [deletedCartItems, setDeletedCartItems] = useState(0);
    
    useEffect(()=>{
        const getCartData = async () => {
            const cartData = await getPurchasesAPICall();
            const actualCartData = cartData.data.data[0].products;
            const totalPriceData = cartData.data.data[0].totalPrice;
            setCartData(actualCartData);
            setTotalPrice(totalPriceData); 
          }
           getCartData();
           
      },[])
    
     // console.log(cartData);
      console.log(totalPrice)
    // const removeCartItem = async (itemId) => {
    //     try {
    //       var res = await axios.delete(`http://localhost:3000/products/${itemId}`)
    //       console.log('Item successfully deleted from Cart.')
    //     } catch (error) {
    //       console.log("failure")
    //     }
    // }
  if(cartData){
    return(
        <div className="row">
        {cartData.map((item) => (
           <div className='col-12 text-center' key={item._id}>
               <div>{item.name}</div>
               <div>{item.price}</div>
               <div className='card-body d-flex flex-row'></div>
           </div>     
        ))}
        <div>Total Price: {totalPrice}</div>
      </div>
    
    )}
    else {
      return (
        <div>
          loading
        </div>
      )
    }
  
}

export default CartPage;

