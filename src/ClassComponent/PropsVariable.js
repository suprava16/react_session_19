import React from "react"

export default class PropsVariable extends React.Component {
  render() {
    const{name,email}=this.props
    return (
      <>
        <h1>Props variable</h1>
        <h1>Name: { this.props.name}</h1>
      </>
    )
  }
}