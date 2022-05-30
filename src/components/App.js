import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import CardList from './CardList';
import InsturmentForm from './InsturmentForm'

function App() {

    //All components are just for demo purposes
    // Will be modified tommorrow
    //db.json currently holding example data
    //GET request, and card renderings are allready functional, will be modified

    const [itemList, setItemList] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetch('http://localhost:6001/items')
            .then(res => res.json())
            .then(setItemList)
    }, [])

    const onAddItem = (newGear) => {

        setItemList([...itemList, newGear])

    }

    const handleSearch = (newSearch) => {
        setSearchTerm(newSearch)
    }
    
    const displayedItemList = itemList.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="App">
            <Header className="App-header" />
            <Navbar searchTerm={searchTerm} onSearch={handleSearch} />
            <CardList itemList={displayedItemList} />
            <InsturmentForm onAddItem={onAddItem} />
        </div>
    );
}

export default App;
