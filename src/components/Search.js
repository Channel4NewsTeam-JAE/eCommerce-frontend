import React, {useState} from 'react';


const Search  = ({handleCategory}) => {
    const[category, setCategory] = useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    }

    const handleSubmit = (event) => {
        handleCategory(category)
    }
    return (
        <div className="input-group">
            <input className='searchInput form-control rounded' type="text" onChange={handleChange}/>
            <button type="button" class="btn btn-outline-primary" onClick={handleSubmit}>Search Stores</button>
        </div>
    )
}

export default Search;