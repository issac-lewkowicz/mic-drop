import React, {useState} from 'react'

import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { TextField, Select, InputLabel, MenuItem, Container, Backdrop, Modal } from '@mui/material';


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

        const newObj = {
            ...inputs,
            price: parseFloat(inputs.price),
            rating: parseFloat(inputs.rating)
        }

        fetch('http://localhost:6001/items', {
            method: 'POST',
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify(newObj)
        })
        .then(r => r.json())
        .then(onAddItem)
        

        setInputs(initObj)
    }    


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };




    return(

        <>

        <Button onClick={handleOpen} variant="outlined">Sell Your Gear!</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >


        <Container sx={style}>
            
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
        </Modal>
        </>

    )

}

export default APIForm