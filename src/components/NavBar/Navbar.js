import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return ( 
        <nav className="NavBar">
            <Link to='/'>
            <h3>LGH</h3>
            </Link>
            <div className="categories">
                <NavLink to={`/category/Gaming Keyboards`} className={({isActive}) => isActive ? 'ActivateOption' : 'Option'}>Keyboards</NavLink>
                <NavLink to={`/category/Gaming Mouse`} className={({isActive}) => isActive ? 'ActivateOption' : 'Option'}>Mouse</NavLink>
                <NavLink to={`/category/Gaming Headsets`} className={({isActive}) => isActive ? 'ActivateOption' : 'Option'}>Headsets</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;