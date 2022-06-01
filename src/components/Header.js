import React from 'react'
import InstrumentForm from './InsturmentForm'

function Header({ onSearch, searchTerm }) {
    //const handleNewItem = () => {}



    return (
        <div>
            <h2>Mic Drop</h2>
            <input type="text" placeholder="Search..." value={searchTerm} onChange={e => onSearch(e.target.value)} />
            <InstrumentForm />
            {/* <button onClick={handleNewItem} value="Sell your gear!" /> */}
        </div>
    )
}

export default Header