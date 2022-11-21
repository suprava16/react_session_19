import React, { useState } from "react";

export default function ChangeEvent() {
  const [user, setUser] = useState({ name: "", email: "" })
  const handleEmail = (event) => {
    setUser({
      ...user,
      email: event.target.value
    })
  }
  const handleName = (event) => {
    setUser({
      ...user,
      name: event.target.value
    })
  }
  return (
    <div>
      <input type="text" placeholder="enter email" onChange={handleEmail} />
      <input type="text" placeholder="enter name" onChange={handleName}/>
      <h1>name: {user.name}</h1>
      <h1>email: {user.email}</h1>
    </div>
  )
}