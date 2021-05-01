import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ShoppingList />
    </div>
  );
}

export default App;
