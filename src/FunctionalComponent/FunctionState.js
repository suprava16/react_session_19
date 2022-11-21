import React, { useState } from "react"

export default function FunctionState() {
  const [name, setName] = useState("suprava")
  const handleClick=()=>{
    setName(6777)
  }
  return (
    <div>
      <h1>State variable in functional component</h1>
      <h1>name: {name}</h1>
      <button onClick={handleClick}>Update</button>
    </div>
  )
} 