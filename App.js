
import React,{useState} from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Product from './Component/Items/Product';
import Cart from './Layout/Cart';




function App() {
   
  const [cartdata, setCartdata] = useState(false)

  const showcartHandeler = ()=>{
    setCartdata(true)
  };

  const closedataHandeler = () => {
    setCartdata(false);
  };
  
  return (
    <div className="App">
    
    {cartdata && <Cart onClose={closedataHandeler}/>}

    <Header onshowCart={showcartHandeler}/>
   
    <Product/>
  

    </div>
  );
}

export default App;
