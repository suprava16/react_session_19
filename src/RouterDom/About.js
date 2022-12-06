import React from 'react'
import { useParams } from 'react-router-dom'
function About() {
  const parameter=useParams()
  console.log(parameter)
  return (
    <div>About Component id={parameter.id}</div>
  )
}

export default About