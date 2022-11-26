import axios from 'axios'
import React, { useEffect, useState } from 'react'

function PassData() {
  const [user, setUser] = useState({ email: "", password: "" })
const handlelogin=()=>{
  axios.post("https://reqres.in/api/login",user)
    .then(result=>{
      console.log(result)
    })
}
  const handleEmail = (event) => {
    setUser({
      ...user,
      email: event.target.value
    })
  }
  const handlePassword = (event) => {
    setUser({
      ...user,
      password: event.target.value
    })
  }
  return (
    <div>
      <input type="text" placeholder='enter email' onChange={handleEmail} />
      <input type="text" placeholder="enter passsword" onChange={handlePassword} />
      <button onClick={handlelogin}>login</button>
    </div>
  )
}

export default PassData