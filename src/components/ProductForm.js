import React ,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { postProductAPICall } from '../Api';


const ProductForm = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        price: null,
        description: "",
        quantity: null,
        category: "",
        image: "",
      });
      let navigate = useNavigate();
    const handleChange = (event) => {
        event.persist();
        setFormValues((prevValues) => {
          const editedValues = {
            ...prevValues,
            [event.target.name]: event.target.value,
          };
          return editedValues;
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        postProductAPICall(formValues)
        navigate('/products');        
      };
    return (
        <div className="form-container">
            <form>
            <div className="form-group">
            <label htmlFor="category">Select Category</label>
            <select
                className="form-select"
                id="category"
                name='category'
                onChange={handleChange}
            >
                <option value="Clothing">Clothing</option>
                <option value="Computers">Computers</option>
                <option value="Music">Music</option>
                <option value="Vehicles">Vehicles</option>
                <option value="Sports and Outdoors">Sports and Outdoors</option>
            </select>
            </div>
            <div className="form-group">
            <label htmlFor="name">Title</label>
            <input
                type="text"
                className="form-control form-control-sm"
                id="name"
                name="name"
                placeholder="Product title"
                onChange={handleChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
                type="text"
                className="form-control form-control-sm"
                id="price"
                name="price"
                placeholder="Price of the Product"
                onChange={handleChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
                type="text"
                className="form-control form-control-sm"
                id="description"
                name="description"
                placeholder="Brief description of the product"
                onChange={handleChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
                type="text"
                className="form-control form-control-sm"
                id="quantity"
                name="quantity"
                placeholder="Number of items"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="image">Image URL</label>
            <input
                type="text"
                className="form-control form-control-sm"
                id="image"
                name="image"
                placeholder="Image URL for product"
                onChange={handleChange}
            />
            </div>
            <input
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
            />
        </form>
      </div>
    )
}

export default ProductForm;