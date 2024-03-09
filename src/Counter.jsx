import { useState } from "react"

export default function Counter(){
    const[count,setCount]= useState(0); //ekhane 0 hoilo initial value of counter

    const handleAdd =()=>{
        const newCount = count+1
        setCount(newCount)
    }
    const handleReduce =()=>{
        const newCount = count-1
        setCount(newCount) 
    }
    return(
        <div style={{border:'2px solid blue'}}>
            <h3>Count : {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}