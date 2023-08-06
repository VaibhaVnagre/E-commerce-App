import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import Product from "./Component/Items/Product";
import Cart from "./Layout/Cart";
import CartProvider from "./Store/CartProvider";
import About from "./Pages/About";
import Rootleout from "./UI/NavBar/Rootleout";
import Home2 from "./Pages/Home";
import Errorpage from "./Pages/Error";



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

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Rootleout/>,
  //     children: [
  //       { path: "/Aboutpage", element: <About /> },
  //     ]
  //   },
  // ]);

  const [cartdata, setCartdata] = useState(false);

  const showcartHandeler = () => {
    setCartdata(true);
  };

  const closedataHandeler = () => {
    setCartdata(false);
  };

  return (
    <div className="App">
      
      {/* <RouterProvider router={router} /> */}

      <CartProvider>
        {cartdata && <Cart onClose={closedataHandeler} />}

        <Header onshowCart={showcartHandeler} />

        <Product />
      </CartProvider>
    </div>
  );
}

export default App;
