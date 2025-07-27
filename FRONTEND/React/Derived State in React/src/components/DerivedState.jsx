// How to find Average Age->

import { useState } from 'react'
const DerivedState = () => {
     const [users, setUsers]= useState([
        {name: "Alice", age : 25},
        {name: "Bob", age : 28},
        {name: "Carlie", age : 45},
        {name: "Angles", age : 35},
        {name: "David", age : 55},
    
     ])
     // here userCount  is d derived state
     const userCount= users.length;
     // derived state avg age 
     const avgAge= (users.reduce((accum, curElem)=>
         {
       return  accum+curElem.age;
        

     },0))/userCount;

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
        <p>{userCount}</p>
        <p>{avgAge}</p>
       
     </div>
  )
}

export default DerivedState
