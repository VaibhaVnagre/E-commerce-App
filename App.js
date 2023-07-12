
import React,{useState} from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Product from './Component/Items/Product';
import Cart from './Layout/Cart';
import CartProvider from './Store/CartProvider';




function App() {
   
  const [cartdata, setCartdata] = useState(false)

  const showcartHandeler = ()=>{
    setCartdata(true)
  };

  const closedataHandeler = () => {
    setCartdata(false);
  };
  
  return (
   
      <div className='App' >

     <CartProvider>
      
    {cartdata && <Cart onClose={closedataHandeler}/>}

    <Header onshowCart={showcartHandeler}/>
   
    <Product/>

    </CartProvider>

    </div>
   
  );
}

export default App;
