import { useState } from "react";

function Search(){
const[text,setText]=useState("");
const[items,setItems]=useState([]);
    function Submit(){
        setItems(pre=>[...pre,text]);
        setText(null);
    }

    return(
        <>
        <div>
            <input onChange={(e)=>setText(e.target.value)} type="text" placeholder="Search here"/>
            <button onClick={Submit}>Submit</button>
            <ul>{
                items.map((items,index)=>(
                    <li key={index}>{items}</li>
                ))}
            </ul>
        </div>
        </>
    )
}
export  default Search;