import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className= 'navbar'>
            <div className='nav-bar-logo'>
               <a className='navbar-brand'>ECommerce</a>
            </div>
            <ul className='navbar-nav'>
                <Link className='nav-link' to= "/">Home</Link>
                <Link className='nav-link' to="/Cart">Cart</Link>
                <Link className='nav-link' to= "/Team">Team </Link>
            </ul>
        </nav>
    )
}

export default Header;