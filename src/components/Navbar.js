import React from 'react'

function Navbar({ onSearch, searchTerm }) {
    //const handleNewItem = () => {}

    

    return (
        <div>
            <h2>Mic Drop</h2>
            <form>
                <input type="text" value={searchTerm} onChange={e => onSearch(e.target.value)} />
                
            </form>
            {/* <button onClick={handleNewItem} value="Sell your gear!" /> */}
        </div>
    )
}

export default Navbar