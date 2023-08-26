import React, { useState } from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import "./App.css";
import Header from "./Component/Header/Header";
import Product from "./Component/Items/Product";
import Cart from "./Layout/Cart";
import CartProvider from "./Store/CartProvider";
import About from "./Pages/About";
import Home2 from "./Pages/Home";
import Errorpage from "./Pages/Error";
import ContactUs from "./Pages/ContactUs";
import Form from "./Pages/Form";
import ProductDetail from "./Pages/ProductDetail";





// const router = createBrowserRouter([
//   {
//     path: "",
//     element: <Rootleout/>,
//     errorElement: <Errorpage/>,
//     children: [
//       { path: "Aboutpage", element: <About /> },
//       {path: 'Homepage', element: <Home2/>}
//     ]
//   },
// ]);


function App() {

 

  const [cartdata, setCartdata] = useState(false);

  const showcartHandeler = () => {
    setCartdata(true);
  };

  const closedataHandeler = () => {
    setCartdata(false);
  };

  return (
    <div className="App">

      <CartProvider>
     
      <Header onshowCart={showcartHandeler} />
        
        <Switch>

          <Route path='/' exact>

          <Redirect to='/Home' />

          </Route>

      <Route path="/Aboutpage" component={About} exact/>

      <Route path='/contact' component={ContactUs}/>

        {cartdata && <Cart onClose={closedataHandeler} />}

        <Route path='/Home' component={Product} exact/>

        <Route path ='/back' component ={Product}/>

        <Route path = '/products/:product_id' component={ProductDetail} />

        </Switch>

      </CartProvider>
    </div>
  );
}

export default App;
