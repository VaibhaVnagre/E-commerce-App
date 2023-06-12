import Product from './Component/Product';
import React,{useState} from 'react';
import './App.css';
import Header from './Component/Header';
import Heading from './Component/Heading';


function App() {
   
  
  return (
    <div className="App">
    <Header/><br></br>
    
    <Product/>

    </div>
  );
}

export default App;
