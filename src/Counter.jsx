import { useState } from "react"


export default function Counter(){
    const [count,setCount]= useState(0);

    
    const handleAdd=()=>{
    const Newcount=count+1;
    setCount(Newcount);
    }

    const counterStyle={
        border:'2px solid yellow'
    }
    return(
        <div style={counterStyle}>
            <h3>count:{count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}