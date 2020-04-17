import React from "react";
import "./App.css";
import Api from './Api';
import Nav from './Nav';

const background = {
  background: '#0B3D91'
}

function App() {
  return (
    <div className="App" style={background}>
      <Nav />
      <Api />
    </div>
  );
}

export default App;
