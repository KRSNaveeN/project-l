import { useEffect, useState } from "react";

const Products = ({items,col})=>{
    const[listitems, setListitems] = useState([]);
    const [ carttotal, setCarttotal] = useState(0);
    
    useEffect(()=>{setListitems(items)}, [items]);
    console.log(listitems);
    console.log(carttotal);

    // useState({});

    function smallHandler(item){

       let index = listitems.findIndex((eachitem) => eachitem.name === item.name);
       const updatedarr = [...listitems];
       updatedarr[index] = {...updatedarr[index], small : (updatedarr[index].small)-1, scount : (updatedarr[index].scount)+1} ;
       setListitems(updatedarr);
       fetch("https://tshirtsdata-ae673-default-rtdb.firebaseio.com/data.json",{
        method : "PUT",
        body : JSON.stringify(updatedarr),
       });
       setCarttotal((ex)=>ex+1);
       col(updatedarr);
      

    }
    function largeHandler(item){

        let index = listitems.findIndex((eachitem) => eachitem.name === item.name);
        const updatedarr = [...listitems];
        updatedarr[index] = {...updatedarr[index], large : (updatedarr[index].large)-1, lcount : (updatedarr[index].lcount)+1};
        setListitems(updatedarr);
        fetch("https://tshirtsdata-ae673-default-rtdb.firebaseio.com/data.json",{
        method : "PUT",
        body : JSON.stringify(updatedarr),
       });
       setCarttotal((ex)=>ex+1);
       col(updatedarr);
       
     }

     function mediumHandler(item){

        let index = listitems.findIndex((eachitem) => eachitem.name === item.name);
        const updatedarr = [...listitems];
        updatedarr[index] = {...updatedarr[index], medium : (updatedarr[index].medium)-1, mcount : (updatedarr[index].mcount)+1};

        setListitems(updatedarr);
        fetch("https://tshirtsdata-ae673-default-rtdb.firebaseio.com/data.json",{
        method : "PUT",
        body : JSON.stringify(updatedarr),
       });
       setCarttotal((ex)=>ex+1);
       col(updatedarr);
    
     }

    
    return<>
       <ul>
       {
        listitems.map((item)=>{
            return <li key={Math.random()}>
                 <div>{item.name}</div>
                 <div>{item.description}</div>
                 <div>{item.price}</div>
                 {
                    item.small>0 ? <button onClick={()=>smallHandler(item)}>Small {item.small}</button> : <h4>Unavailable</h4>
                 }

                 {
                    item.medium >0 ? <button onClick={()=>mediumHandler(item)}>Medium {item.medium}</button> : <h4>Unavailable</h4>
                 }

                 {
                     item.large >0 ?  <button onClick={()=>largeHandler(item)}>Large {item.large}</button> : <h4>Unavailable</h4>
                 }
                 
                 
                
                 
             </li>
       })}
       </ul>
    </>
}

export default Products;