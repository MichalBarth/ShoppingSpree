import './App.css';
import React from "react";
import {useState} from 'react';

import Input from "./components/InputBlock.jsx";
import Navigation from "./components/Navigation.jsx";
import List from "./components/List.jsx";

function App() {
  const [list, setList] = useState([]);
  const count = list.length;

  const addItem = (value) => (
    setList([...list, value])
  )

  const removeItem = (index) => {
    list.splice(index, 1)
    setList([...list])
  }

  const copyItem = (value) => (
    setList([...list, value])
  )

  return (
      <>
        <Navigation count={count}/>
        <div className="kontas">
          <Input addItem={addItem}/>
          <List copyItem={copyItem} removeItem={removeItem} value={list}/>
        </div>
      </>
  );
}

export default App;
