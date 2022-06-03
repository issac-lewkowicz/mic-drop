import React from 'react'
import InsturmentForm from "./InsturmentForm";
import IconButton from '@mui/material/IconButton';
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header({ onSearch, searchTerm, onAddItem }) {


    return (
        <div id="Header">
            <NavLink exact to="/" ><h2 className='Header_Content' id='logo'>Mic Drop</h2></NavLink>
            <input className='Header_Content' type="text" placeholder="Search..." value={searchTerm} onChange={e => onSearch(e.target.value)} />

            <InsturmentForm id='iForm' className='Header_Content' onAddItem={onAddItem} />
            <NavLink to='/cart'><IconButton size="large" aria-label="Add To Cart" color="primary"><ShoppingCartIcon/></IconButton></NavLink>
        </div>
    )
}

export default Header