import React from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

function NavBar({ onChangeFilter }) {

  function handleClick(e) {
    onChangeFilter(e.target.value);
  }

  return (
    
      <Grid

        container 
        spacing={8}
        marginTop='1px'
        direction="row"
        // justifyContent="center"
        // alignItems="center"
        // sx={
        //   {backgroundColor: '}
        // }
        >
    
      <Grid item xs={3}>
        <Button variant='contained' color='secondary' value="All" onClick={handleClick}>All</Button>
      </Grid>
    
      <Grid item xs={3}>
        <Button variant='contained' color='secondary' value="Electric Guitar" onClick={handleClick}> Guitars</Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant='contained' color='secondary' value="Microphone" onClick={handleClick}> Microphones</Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant='contained' color='secondary' value="Sound Card" onClick={handleClick}> Sound Cards</Button>
      </Grid>
    </Grid>
    
    
  )
}

export default NavBar