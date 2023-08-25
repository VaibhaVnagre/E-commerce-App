import { Link } from "react-router-dom/cjs/react-router-dom";
import { Fragment, useCallback, useRef, useState, useEffect } from "react";
import ContactData from "./ContactData";

const ContactUs = () => {
  const [store, setStore] = useState([]);
  const [error, setError] = useState(null);
  const [valid, setValid] = useState()
  const name = useRef();
  const email = useRef();
  const number = useRef();

  async function PostHandeler(e) {
    e.preventDefault();
    const arr = 
      {
        Name: name.current.value,
        Email: email.current.value,
        Number: number.current.value,
      }
    ;
    const response = await fetch(
      "https://from-data-a7118-default-rtdb.firebaseio.com/from.json",
      {
        method: "POST",
        body: JSON.stringify(arr),
      }
    );
    const data = await response.json();

    name.current.value = "";
    email.current.value = "";
    number.current.value = "";
  };
//----------------------------------------------------------------
  const fetchData =useCallback  (async () => {
    
setError(null);
    try {
      const response = await fetch(
        "https://from-data-a7118-default-rtdb.firebaseio.com/from.json"
      );
      if(!response.ok){
        throw new Error("Something went wrong")
      }
      const data = await response.json();
      let load = [];
      for (const key in data){
        load.push({
             id : key,
         ...data[key],
        })
      }
      setStore(load);
    } catch(error){
      setError(error.message)
    }
},[])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

//--------------------------------------------------------------
  
  async function Remover (id) {

    const response = await fetch(`https://from-data-a7118-default-rtdb.firebaseio.com/from/${id}.json`,{
            method : 'DELETE'
        })
         fetchData();
  };
  //-----------------------------------------------------------------
  let content = <p>No found Data</p>

  if(store.length>0){
     content = store.map((val)=>{
      return(
        <ContactData
            delHandeler={Remover}
             id = {val.id}
            Name = {val.Name}
            Email = {val.Email}
            Number = {val.Number}
            />
      )
    })
  };

  if(error){
    content = <p>{error}</p>
  }
  


  return (
    <Fragment>
      <br></br>
      <form style={{ marginTop: "60px" }}>
        <label>Name</label>
        <input type="text" ref={name} />

        <label>Email-id</label>
        <input type="mail" ref={email} />

        <label>Phone-No</label>
        <input type="number" ref={number} />

        <button onClick={PostHandeler}>Submit</button>
        <button onClick={fetchData}>Fetch-Data</button>
      </form>
      <br></br><br></br>

     <div>{content}</div>
    
    </Fragment>
  );
};
export default ContactUs;
