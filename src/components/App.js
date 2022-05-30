
import './App.css';
import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import Header from './Header';
import InsturmentForm from './InsturmentForm'

function App() {

    //All components are just for demo purposes
    // Will be modified tommorrow
    //db.json currently holding example data
    //GET request, and card renderings are allready functional, will be modified

    const [itemList, setItemList] = useState([])
    

    useEffect(() => {
        fetch('http://localhost:6001/items')
            .then(res => res.json())
            .then(setItemList)
    }, [])

    const onAddItem = (newGear) => {

        setItemList([...itemList, newGear])

    }


    return (
        <div className="App">
            <Header className="App-header" />
            <CardList itemList={itemList} />
            <InsturmentForm onAddItem={onAddItem} />
        </div>
    );
}

export default App;
