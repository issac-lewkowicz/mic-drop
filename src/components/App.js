import React, { useState, useEffect } from 'react';
import './App.css';
import Banner from './Banner';
import Header from './Header';
import NavBar from './NavBar';
import CardList from './CardList';
//import HeroCarousel from './Hero Section/HeroCarousel';
import InsturmentForm from './InsturmentForm';
import Cart from './Cart';

function App() {

    const [itemList, setItemList] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [filterBy, setFilterBy] = useState('All');
    //const [cartList, setCartList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:6001/items')
            .then(res => res.json())
            .then(setItemList)
    }, [])

    // useEffect(() => {
    //     fetch('http://localhost:6001/cart')
    //         .then(res => res.json())
    //         .then(setCartList)
    // }, [])

    const onAddToCart = (id) => {
        const patchConfig = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({ inCart: true })
        };
        fetch(`http://localhost:6001/items/${id}`, patchConfig)
            .then(res => res.json())
            .then((resItem) => handleUpdateCart(resItem))
    }

    const onRemoveFromCart = (id) => {
        const patchConfig = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({ inCart: false })
        };
        fetch(`http://localhost:6001/items/${id}`, patchConfig)
            .then(res => res.json())
            .then((resItem) => handleUpdateCart(resItem))
    }

    function handleUpdateCart(newItem) {
        const updatedItemList = itemList.map(item => item.id === newItem.id ? newItem : item);
        setItemList(updatedItemList)
    }

    const onAddItem = (newGear) => setItemList([...itemList, newGear]);

    const handleFilterBy = (category) => setFilterBy(category);

    const handleSearch = (newSearch) => setSearchTerm(newSearch);

    const displayedItemList = itemList.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter((item) => filterBy === "All" ? true : item.instruFam === filterBy);

    const cartList = itemList.filter((item) => item.inCart);

    return (
        <div className="App">
            <Banner className="App-header" />
            <Header searchTerm={searchTerm} onSearch={handleSearch} />
            <NavBar filterBy={filterBy} onChangeFilter={handleFilterBy} />
            {/* <HeroCarousel /> */}
            <CardList itemList={displayedItemList} onAddToCart={onAddToCart} />
            <Cart onRemoveFromCart={onRemoveFromCart} cartList={cartList} />
            <InsturmentForm onAddItem={onAddItem} />
        </div>
    );
}

export default App;
