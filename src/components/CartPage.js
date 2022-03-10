// import axios from "axios";
import { useState, useEffect } from 'react';
import { getPurchasesAPICall } from "../Api";

//build out get api call that gets purchase, set to state variable
const CartPage = () => {
    const [cartData, setCartData] = useState([]);
    // const [deletedCartItems, setDeletedCartItems] = useState(0);
    
    useEffect(()=>{
        const getCartData = async () => {
            const cartData = await getPurchasesAPICall();
            const actualCartData = cartData.data.data;
            setCartData(actualCartData); 
          }
           getCartData();
           
      },[])
    
   
    // const removeCartItem = async (itemId) => {
    //     try {
    //       var res = await axios.delete(`http://localhost:3000/products/${itemId}`)
    //       console.log('Item successfully deleted from Cart.')
    //     } catch (error) {
    //       console.log("failure")
    //     }
    // }
    console.log(cartData) 
    return(
        <div className="col">
        {cartData.map((item, index) => (
           <div>
               <img className='' src={item.image} />
               <div className='card-body d-flex flex-row'></div>
           </div>     
        ))}
      </div>
    
    )
}

export default CartPage;

