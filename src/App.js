import './App.css';
import Header from './Components/Header';
import Products from './Components/Products';
import { useState,useEffect } from 'react';
import Example from './Components/Example';


function App() {
const[ items,setItems] =  useState([]);
const [list, setlist]= useState([]);

const collect = async ()=>{
  let response = await fetch("https://tshirtsdata-ae673-default-rtdb.firebaseio.com/data.json");
  let data = await response.json();
  console.log(data);
  if(data != null)
  {
    setItems(Object.values(data));
    setlist(Object.values(data));
  }
}


useEffect( ()=>{
    collect();
     
   },[]);




function collectdata(data){
     setItems([...items, data]);
  }
  console.log(items);
       
  return (
     <header>
          <Example listitems={list}/>
          <Header collectdata={collectdata}/>
          <Products items={items} col={setlist}/>
     </header>
  );
}

export default App;
