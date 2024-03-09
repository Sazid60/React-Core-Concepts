import { useState } from "react" 
// useState Hook=

export default function Team() {

    const [playerCount, playerCountSet] = useState(11)
    const handleAdd = () => {
        const newCount = playerCount + 1
        playerCountSet(newCount)
    }
    const handleReduce = () => {
        playerCountSet(playerCount - 1)
    }


    const divStyle = {
        border: '2px solid red',
        margin: '15px',
        padding: '15px',
        borderRadius: '20px'
    }
    return (
        <div style={divStyle}>
            <h3>Players : {playerCount}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Remove</button>
        </div>
    )
}