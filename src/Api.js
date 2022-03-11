import axios from 'axios'

//Product Api Calls
const getProductsAPICall = async () => {
    const products = await axios.get("https://immense-crag-04296.herokuapp.com/products");
    return products;
}

const getProductsBySearchAPICall = async (category) => {
    const products = await axios.get(`https://immense-crag-04296.herokuapp.com/products/search/${category}`)
    return products;
}
const postProductAPICall = async (product) => {
    const productData = await axios.post("https://immense-crag-04296.herokuapp.com/products", {
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "quantity": product.quantity,
        "category": product.category,
        "image": product.image
    });
}
const putProductAPICall = async (product) => {
    const productData = await axios.put(`https://immense-crag-04296.herokuapp.com/products/${product.id}`, {
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "quantity": product.quantity,
        "category": product.category,
        "image": product.image
    });
}
const patchProductAPICall = async (product_id, ) => {
    const productData = await axios.patch(`https://immense-crag-04296.herokuapp.com/products/${product_id}`, {

    });

}
const deleteProductAPICall = async (product_id) => {
    const productData = await axios.delete(`https://immense-crag-04296.herokuapp.com/products/${product_id}`);
}

//-------------------------------------------------------------------//

//Purchases API Calls
const getPurchasesAPICall = async () => {
    const purchases = await axios.get("https://immense-crag-04296.herokuapp.com/purchases");
    return purchases;
}
const postPurchasesAPICall = async (purchase) => {
    const purchaseData = await axios.post("https://immense-crag-04296.herokuapp.com/purchases", {
        "totalPrice": purchase.totalPrice,
        "paid": purchase.paid,
        "products": purchase.products
    });
}
const putPurchasesAPICall = async (purchase) => {
    const purchaseData = await axios.put(`https://immense-crag-04296.herokuapp.com/purchases/${purchase.id}`, {
       "totalPrice": purchase.totalPrice,
       "paid": purchase.paid,
       "products": purchase.products
    })
}
const patchPurchaseAPICall = async (purchase, purchaseValue, propertyToEdit) => {
    const purchaseData = await axios.patch(`https://immense-crag-04296.herokuapp.com/purchases/${purchase.id}`, {
        propertyToEdit: purchaseValue
    })
}
const deletePurchasesAPICall = async (purchase) => {
    const purchaseData = await axios.delete(`https://immense-crag-04296.herokuapp.com/purchases/${purchase.id}`);
}

//-------------------------------------------------------------------//
//Seller API Calls

const getSellersAPICall = async () => {
    const sellers = await axios.get("https://immense-crag-04296.herokuapp.com/sellers");
    return sellers

}
const postSellerAPICall = async (seller, product) => {
    const sellerData = await axios.post("https://immense-crag-04296.herokuapp.com/sellers", {
            "firstName": seller.firstName,
            "lastName": seller.lastName,
            "email": seller.email,
            "products": product.id
    });
}
const putSellerAPICall = async (seller, product) => {
    const sellerData = await axios.put(`https://immense-crag-04296.herokuapp.com/sellers/${seller.id}`, {
        "firstName": seller.firstName,
        "lastName": seller.lastName,
        "email": seller.email,
        "products": product.id
    })
 
}
const patchSellerAPICall = async (seller, sellerPropertyEdit, sellerPropertyValue) => {
    const sellerData = await axios.patch(`https://immense-crag-04296.herokuapp.com/sellers/${seller.id}`, {
        sellerPropertyEdit: sellerPropertyValue
    })
}
const deleteSellerAPICall = async (seller) => {
    const sellerData = await axios.delete(`https://immense-crag-04296.herokuapp.com/sellers/${seller.id}`)
}

export {
    //GETTERS
    getProductsAPICall,
    getProductsBySearchAPICall,
    getPurchasesAPICall,
    getSellersAPICall,

    //POSTERS
    postProductAPICall,
    postPurchasesAPICall,
    postSellerAPICall,

    //PUTTERS
    putProductAPICall,
    putPurchasesAPICall,
    putSellerAPICall,

    //DELETERS
    deleteProductAPICall,
    deletePurchasesAPICall,
    deleteSellerAPICall,

    //PATCHERS
    patchProductAPICall,
    patchPurchaseAPICall,
    patchSellerAPICall
}