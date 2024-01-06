import { useEffect, useRef, useState } from 'react';
import classes from './Header.module.css';
const Header = ({collectdata}) =>{

    

   const name =  useRef();
   const description = useRef();
   const price = useRef();
   const small = useRef();
   const medium = useRef();
   const large = useRef();
  

//    const collect = async ()=>{
//     let response = await fetch("https://tshirtsdata-ae673-default-rtdb.firebaseio.com/data.json");
//     let data = await response.json();
//     console.log(data,"inside proucts");
//     if(data != null)
//     {
//       setValues((pre)=> data);
//     } 
//   }

  
//   useEffect( ()=>{
//       collect();
//      },[]);

   


    const clickHandler = async (e)=>{
        e.preventDefault();
        let data= {
            name : name.current.value,
            description: description.current.value,
            price : price.current.value,
            small : small.current.value,
            medium : medium.current.value,
            large : large.current.value,
            scount : 0,
            mcount : 0,
            lcount : 0,
        };
        
       
      

        const response =  await fetch(`https://tshirtsdata-ae673-default-rtdb.firebaseio.com/data.json`,{
            method : 'POST',
            // body: JSON.stringify([...values,data]),
            body : JSON.stringify(data),
        });
    
        const ans =await response.json();
        console.log(ans);
        collectdata(data);
        
        

    }
    return <>
        <form onSubmit={clickHandler} className={classes.header}>
            <div>
                <label>Product Name</label>
                
                <input ref= {name}/>
            </div>

            <div>
                <label>Description</label>
                <input ref={description}/>
            </div>

            <div>
                <label>Price</label>
                <input ref={price}/>
            </div>

            <div>
                <label>Small</label>
                <input ref={small}/>
            </div>

            <div>
                <label>Medium</label>
                <input ref={medium}/>
            </div>

            <div>
                <label>Large</label>
                <input ref={large}/>
            </div>

            <div>
                <button>ADD</button>
            </div>
        </form>
    </>
}
export default Header;