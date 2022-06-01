import React from 'react'
import InsturmentForm from "./InsturmentForm";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function Header({ onSearch, searchTerm, onAddItem }) {

    const handleClick = (e) => { }


    return (
        <div id="Header">
            <h2 className='Header_Content' id='logo'>Mic Drop</h2>
            <input className='Header_Content' type="text" placeholder="Search..." value={searchTerm} onChange={e => onSearch(e.target.value)} />

            <InsturmentForm id='iForm' className='Header_Content' onAddItem={onAddItem} />
            <Link to='/instruments/cart'>Go to Cart</Link>
        </div>
    )
}

export default Header