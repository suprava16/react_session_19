import React from 'react'
import { useLocation } from 'react-router-dom'
function Contact() {
  const data=useLocation()
  console.log(data)
  return (
    <div>Contact Component course={data.state.course}</div>
  )
}

export default Contact