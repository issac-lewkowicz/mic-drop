import React from 'react'

function Navbar({filterBy, onChangeFilter}) {
    function handleGuitars(e){
        onChangeFilter(e.target.value);
    }
  return (
    <div>Navbar
           <br/>
            <label><strong></strong>
            <button onClick={handleGuitars}> Guitars</button>
            </label>
    </div>
  )
}

export default Navbar