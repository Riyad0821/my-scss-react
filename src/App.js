import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';
import Categories from './Components/Categories/Categories';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState(0);
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <p>count value: {category}</p>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
      
    </CategoryContext.Provider>
  );
}

export default App;
