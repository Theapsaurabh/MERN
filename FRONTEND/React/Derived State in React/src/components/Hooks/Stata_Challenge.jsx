// you have to start by looping through an object to show names and ages ex: name-> age yrs old
// then use the useState hooks to manage the state and achieve the same result

import { useState } from "react"


 

 
 
 const Stata_Challenge = () => {
    const [users, setUsers]= useState([
    {name: "Alice", age : 25},
    {name: "Bob", age : 28},
    {name: "Carlie", age : 45},
    {name: "Angles", age : 35},
    {name: "David", age : 55},

 ])
   return (
     <div >

        <h1>users List</h1>
       { users.map((users,index)=>{ 
        return (
            <ul key={index}>
                <li>{users.name}</li>
                <li>{users.age}</li>
            </ul>
        )

        })}
       
     </div>
   )
 }
 
 export default Stata_Challenge
 