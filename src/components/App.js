import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import CardList from './CardList';
function App() {

const [itemList, setItemList] = useState([])


useEffect(() => {
  fetch('  http://localhost:6001/items')
      .then(res => res.json())
      .then(setItemList)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <CardList />
    </div>
  );
}

export default App;
