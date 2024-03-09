
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
function handleClick(){
  alert('Button Is Clicked')
}
const handleClick2 = () => {
  alert('Button 2 Is Clicked')
}
const handleClick4 =(num) =>{
  alert(num+8)
}
  return (
    <>
      <h3>React Core Concept 2</h3>
      {/* Regular HTML e emn silo
      <button onclick ="handleClick()">Click Me</button> 
      */}
      <button onClick ={handleClick}>Click Me</button> <br />
      <button onClick={handleClick2}>Click Click</button> <br />
      <button onClick={()=>{alert('Button 3 Is Clicked')}}>Click 3 </button> <br />

      {/* Vitore Parameter Pass korle auto cole ashbe because vabe eta akta js function so click howar agei alert dekhaye dye eta akta problem solve korte akta blank function diye wrap kore felte hobe
      <button onClick={handleClick4(4)}>Click 4</button> 
      */}
    <button onClick={()=>{handleClick4(4)}}>Click 4</button> 

    <Counter></Counter>
    <Team></Team>
    <Users></Users>
    <Friends></Friends>
    </>
  )
}

export default App
