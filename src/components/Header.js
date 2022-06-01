import React from 'react'
import InstrumentForm from './InsturmentForm'

function Header({ onSearch, searchTerm, onAddItem }) {
    //const handleNewItem = () => {}



    return (
        <div id="Header">
            <h2 className='Header_Content' id='logo'>Mic Drop</h2>
            <input className='Header_Content' type="text" placeholder="Search..." value={searchTerm} onChange={e => onSearch(e.target.value)} />
            
            <InstrumentForm id='iForm' className='Header_Content' onAddItem={onAddItem}/>
        </div>
    )
}

export default Header