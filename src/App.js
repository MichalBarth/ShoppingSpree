import './App.css';
import React from "react";
import {Container} from 'reactstrap'
import Item from "./components/Item.jsx";
import Add from "./components/InputBlock.jsx";
import Navigation from "./components/NavBar";

function App() {
  return (
      <>
        <Navigation></Navigation>
        <Container>
            <Item></Item>
            <Item></Item>
            <Add></Add>
        </Container>
      </>
  );
}

export default App;
