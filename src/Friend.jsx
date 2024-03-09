export default function Friend({friendObj}){
console.log(friendObj)
const {name,email} = friendObj
return(
    <div className="box">
        <h4>Name : {name}</h4>
        <h5>Email : {email}</h5>
    </div>
)
}