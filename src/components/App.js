
import './App.css';
import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import Header from './Header';

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

    return (
        <div className="App">
            <Header className="App-header" />
            <CardList itemList={itemList} />
        </div>
    );
}

export default App;
