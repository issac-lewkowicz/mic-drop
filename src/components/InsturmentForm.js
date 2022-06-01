import React, {useState} from 'react'

import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { TextField, Select, InputLabel, MenuItem, Container, Backdrop } from '@mui/material';


function APIForm({onAddItem}) {

    const initObj = {
        name: '',
        brand: '',
        price: '',
        instruFam: '',
        condition: '',
        rating: '',
        imageOne: '',
        imageTwo: '',
        imageThree: '',
        inCart: false
    }
    

    const [inputs, setInputs] = useState({})

    const changeHandler = (e) => {

        const name = e.target.name
        const value = e.target.value

        setInputs({...inputs, [name]: value})

    }

    

    const submitHandler = (e) => {
        e.preventDefault()
        fetch('http://localhost:6001/items', {
            method: 'POST',
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify(inputs)
        })
        .then(r => r.json())
        .then(onAddItem)
        

        setInputs(initObj)
    }    


    const [open, setOpen] = useState(false)
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };




    return(

        <>

        <Button onClick={handleToggle} id='iFormButton'>Sell Your Gear!</Button>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
        >


        <Container id='insturmentForm__container'>
            
            <form onSubmit={submitHandler} name='form-field' className='form-field'> 
                <TextField required onChange={changeHandler} name='name' placeholder='Name' value={inputs.name} />
                <TextField required onChange={changeHandler} name='brand' placeholder='Brand' value={inputs.brand} />
              
                <InputLabel id='conId'>Condition</InputLabel>
                <Select labelId='conId' required onChange={changeHandler} name='condition' placeholder='Condition?' label='Condition' value={inputs.condition} >
                    <MenuItem value='New'>New</MenuItem>
                    <MenuItem value='Mint'>Mint</MenuItem>
                    <MenuItem value='Okay'>Okay</MenuItem>
                    <MenuItem value='Used'>Used</MenuItem>
                    <MenuItem value='Poor'>Poor</MenuItem>
                </Select>
                <TextField required onChange={changeHandler} name='price' placeholder='price' value={inputs.price} />
                <TextField required onChange={changeHandler} name='instruFam' placeholder='Type Of Insturment' value={inputs.instruFam} />
                <Select required onChange={changeHandler} name='rating' placeholder='Rating' value={inputs.rating} >
                    <MenuItem value='1'>1</MenuItem>
                    <MenuItem value='1'>2</MenuItem>
                    <MenuItem value='3'>3</MenuItem>
                    <MenuItem value='4'>4</MenuItem>
                    <MenuItem value='5'>5</MenuItem>
                </Select>
                <TextField required onChange={changeHandler} name='imageOne' placeholder='Add An Image' value={inputs.imageOne} />
                <TextField required onChange={changeHandler} name='imageTwo' placeholder='Add An Image' value={inputs.imageTwo} />
                <TextField required onChange={changeHandler} name='imageThree' placeholder='Add An Image' value={inputs.imageThree} />  
                <Button varient='contained' type='submit' >The Hardest Button To Button </Button>
            </form>
        </Container>
        </Backdrop>
        </>

    )

}

export default APIForm