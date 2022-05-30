import React, {useState} from 'react'


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
        imageThree: ''
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

    return(

        <div>
            <></>
            <form onSubmit={submitHandler} name='form-field' className='form-field'> 
                <textarea required onChange={changeHandler} name='name' placeholder='Name' value={inputs.name} />
                <textarea required onChange={changeHandler} name='brand' placeholder='Brand' value={inputs.brand} />
                {/* <textarea required onChange={changeHandler} name='new' placeholder='New or Used?' value={inputs.new} /> */}
                <textarea required onChange={changeHandler} name='condition' placeholder='Condition?' value={inputs.condition} />
                <textarea required onChange={changeHandler} name='price' placeholder='price' value={inputs.price} />
                <textarea required onChange={changeHandler} name='instruFam' placeholder='Type Of Insturment' value={inputs.instruFam} />
                <textarea required onChange={changeHandler} name='rating' placeholder='Rating (Out of 5 Stars)' value={inputs.rating} />
                <textarea required onChange={changeHandler} name='imageOne' placeholder='Add An Image' value={inputs.imageOne} />
                <textarea required onChange={changeHandler} name='imageTwo' placeholder='Add An Image' value={inputs.imageTwo} />
                <textarea required onChange={changeHandler} name='imageThree' placeholder='Add An Image' value={inputs.imageThree} />  
                <button type='submit' >The Hardest Button To Button </button>
            </form>
        </div>

    )

}

export default APIForm