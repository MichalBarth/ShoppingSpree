import './App.css';
import React from "react";
import List from "./components/ListBlock.jsx";
import Add from "./components/InputBlock.jsx";
import Navigation from "./components/NavBar";

function App() {
  return (
      <>
          <Navigation></Navigation>
          <List></List>
          <Add></Add>
      </>
  );
}

export default App;
