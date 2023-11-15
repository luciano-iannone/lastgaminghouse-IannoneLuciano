import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom"
import '../../App.css'

const NavBar = () => {
    return ( 
        <nav className="NavBar">
            <Link to='/'>
            <h3>LastGamingHouse</h3>
            </Link>
            <div className="NavLinks">
                <NavLink to={`/category/Gaming Keyboards`} className={({isActive}) => isActive ? 'ActivateOption' : 'Option'}>Keyboards</NavLink>
                <NavLink to={`/category/Gaming Mouse`} className={({isActive}) => isActive ? 'ActivateOption' : 'Option'}>Mouse</NavLink>
                <NavLink to={`/category/Gaming Headsets`} className={({isActive}) => isActive ? 'ActivateOption' : 'Option'}>Headsets</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;