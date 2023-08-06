   import React, {Fragment} from "react";

   import Navbar from "../UI/NavBar/NavBar";

   const Errorpage = () => {
    return (
        <Fragment>

        <Navbar/>

        <main>
            <h1>An Error Occured !</h1>
            <p>could not found this page !</p>
        </main>

        </Fragment>
    )
   }

   export default Errorpage;