import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'

export default function Friends(){
    const [friendsArray, setFriendsArray] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriendsArray(data))
    },[])
    // ekhane amra dependency dilam fist time load korar jonne
    return(
        <div className="box">
            <h2>Friends Array Length :{friendsArray.length}</h2>
            {
                friendsArray.map(friendEach=><Friend friendObj={friendEach}></Friend>)
            }

        </div>
    )
}

/*
1. state decllare to hold data
2.use effect with dependency array
3.use fetch to load data
4. displa the data to the component
*/