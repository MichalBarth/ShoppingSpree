import './App.css';
import React from "react";
import {Container} from 'reactstrap'
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

  return (
      <>
        <Navigation count={count}/>
        <Container>
          <Input addItem={addItem}/>
          <List value={list}/>
        </Container>
      </>
  );
}

export default App;
