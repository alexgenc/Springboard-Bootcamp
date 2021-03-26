import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Routes from "./Routes";

function App() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <h1 className="mt-3">Welcome to SHOPLY!</h1>
        <Routes />
      </div>
    </main>
  );
}

export default App;
