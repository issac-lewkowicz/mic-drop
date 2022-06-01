import React from 'react'

function NavBar({ onChangeFilter}) {

    function handleClick(e){
        onChangeFilter(e.target.value);
    }

  return (
    <div className='filters'>
          <button value="Electric Guitar" onClick={handleClick}> Guitars</button>
          <button value="Microphone" onClick={handleClick}> Microphone</button>
          <button value="Sound Card" onClick={handleClick}> Sound Card</button>
         
    </div>
  )
}

export default NavBar