import { useEffect, useState } from "react"

export default function Users(){
    // state use korlam because data niye store ekorlam
    const [userArray,setUserArray]= useState([])
    // faka array nilam because user gula re api thekke fetch kore array te set korte cai
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        // .then(data=>console.log(data))
        .then(data=>setUserArray(data))
    })
    return(
        <div>
            <h3>User Array Length : {userArray.length} </h3>
        </div>
    )
}