import React from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

function NavBar({ onChangeFilter }) {

  function handleClick(e) {
    onChangeFilter(e.target.value);
  }

  return (
    <>
      <Grid

        container 
        spacing={8}
        direction="row"
        justifyContent="center"
        alignItems="center"
    
    
    >
      <Grid item lg={3}>
        <Button variant='contained' color='primary' value="Electric Guitar" onClick={handleClick}> Guitars</Button>
      </Grid>
      <Grid item lg={3}>
        <Button variant='contained' color='primary' value="Microphone" onClick={handleClick}> Microphones</Button>
      </Grid>
      <Grid item lg={3}>
        <Button variant='contained' color='primary' value="Sound Card" onClick={handleClick}> Sound Cards</Button>
      </Grid>
    </Grid>
    </>
  )
}

export default NavBar