import React from 'react'
import InsturmentForm from "./InsturmentForm";
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";

function Header({ onSearch, searchTerm, onAddItem }) {


    return (
        <div id="Header">
            <NavLink exact to="/" ><h2 className='Header_Content' id='logo'>Mic Drop</h2></NavLink>
            <input className='Header_Content' type="text" placeholder="Search..." value={searchTerm} onChange={e => onSearch(e.target.value)} />

            <InsturmentForm id='iForm' className='Header_Content' onAddItem={onAddItem} />
            <NavLink to='/instruments/cart'>Go to Cart</NavLink>
        </div>
    )
}

export default Header