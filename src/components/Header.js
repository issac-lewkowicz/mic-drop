import React from 'react'

function Header({ onSearch, searchTerm }) {
    //const handleNewItem = () => {}



    return (
        <div>
            <h2>Mic Drop</h2>
            <input type="text" placeholder="Search..." value={searchTerm} onChange={e => onSearch(e.target.value)} />
            {/* <button onClick={handleNewItem} value="Sell your gear!" /> */}
        </div>
    )
}

export default Header