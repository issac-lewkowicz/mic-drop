import React, { useState, useEffect } from 'react';
import './App.css';
import Banner from './Banner';
import Header from './Header';
import NavBar from './NavBar';
import CardList from './CardList';
import InsturmentForm from './InsturmentForm';
import Cart from './Cart';

function App() {

    //All components are just for demo purposes
    // Will be modified tommorrow
    //db.json currently holding example data
    //GET request, and card renderings are allready functional, will be modified

    const [itemList, setItemList] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [filterBy, setFilterBy] = useState('Guitar');
    const [cartList, setCartList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:6001/items')
            .then(res => res.json())
            .then(setItemList)
    }, [])


    useEffect(() => {
        fetch('http://localhost:6001/cart')
            .then(res => res.json())
            .then(setCartList)
    }, [])

    const onAddItem = (newGear) => {

        setItemList([...itemList, newGear])

    }

    const handleSearch = (newSearch) => {
        setSearchTerm(newSearch)
    }

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
            .then((resItem) => {
                const postConfig = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(resItem),
                };

                fetch('http://localhost:6001/cart', postConfig)
                    .then(res => res.json())
                    .then((responseItem) => {
                        console.log(responseItem)
                        setCartList([...cartList, responseItem])
                    })
            })
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
            .then((resItem) => {
                fetch(`http://localhost:6001/cart/${resItem.id}`, {
                    method: 'DELETE'
                })
                setCartList(cartList.filter(item => item.id !== resItem.id))
            })
    }

    const displayedItemList = itemList.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredItems = displayedItemList.filter((item) => item.type === filterBy)

    return (
        <div className="App">
            <Banner className="App-header" />
            <Header searchTerm={searchTerm} onSearch={handleSearch} />
            <NavBar filterBy={filterBy} onChangeFilter={setFilterBy} />
            <CardList itemList={displayedItemList} filteredItems={filteredItems} onAddToCart={onAddToCart} />
            <Cart onRemoveFromCart={onRemoveFromCart} cartList={cartList} />
            <InsturmentForm onAddItem={onAddItem} />
        </div>
    );
}

export default App;
