import React from "react"
export default function Datapassing(props) {
  console.log(props)
  const{address,age}=props
  return (
    <>
      <h1>Functional component</h1>
      <h2>address: {props.address}</h2>
      <h2>age: {props.age}</h2>
    </>

  )
}