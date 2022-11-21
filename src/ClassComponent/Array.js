import React, { useState } from 'react'
import "./style.css"
function Array() {
  // const[data,setData]=useState(["rima","sony","tony","rahul"])
  const[data,setData]=useState([
    {name: "suprava",email: "suprava@gmail.com"},
    {name: "rima",email: "rima@gmail.com"},
    {name: "tony",email: "tony@gmail.com"},
    {name: "rahul",email: "rahul@gmail.com"},
    {name: "supriya",email: "supriya@gmail.com"},

  ])
  return (
    <div>
      {data.map((item,i)=>{
        return(
          <div key={i}>
          <h1 style={{color: "red",backgroundColor:"gray"}}>name: {item.name} & {item.email}</h1>
          </div>
        )
      })}
      <input type="text"/>
      <button>add</button>
      <ul><li>task1</li></ul>
    </div>
  )
}

export default Array
