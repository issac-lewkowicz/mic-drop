import React, { useState, useEffect } from 'react';
import './App.css';
import Banner from './Banner';
import Header from './Header';
import NavBar from './NavBar';
import CardList from './CardList';
import InsturmentForm from './InsturmentForm'
import HeroCarousel from './Hero Section/HeroCarousel';

function App() {

    //All components are just for demo purposes
    // Will be modified tommorrow
    //db.json currently holding example data
    //GET request, and card renderings are allready functional, will be modified

    const [itemList, setItemList] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [filterBy, setFilterBy] = useState('Guitar');

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
    const filteredItems = displayedItemList.filter((item) => item.type === filterBy)

    return (
        <div className="App">
            <Banner className="App-header" />
            
            <Header searchTerm={searchTerm} onSearch={handleSearch}  />
            
            <NavBar filterBy={filterBy} onChangeFilter={setFilterBy}/>

            <HeroCarousel />

            <CardList itemList={displayedItemList} filteredItems={filteredItems}/>
            
            <InsturmentForm onAddItem={onAddItem} />
        </div>
    );
}

export default App;
