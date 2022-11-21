import React from "react"

export default class StateVariable extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "suprava@gmail.com",
      name: "suprava",
      address: ""
    }
  }
  // handleclick=()=>{
  //   this.setState({
  //     name: "Rima",
  //     email: "rima@gail.com"
  //   })
  // }
  handleChange=(event)=>{
this.setState({
  address: event.target.value
})
  }
  render() {
    const { email, name } = this.state
    return (
      <>
        <h1>State variable Component</h1>
        <h2>name: {this.state.name}</h2>
        <h2>Email: {this.state.email}</h2>
        <h2>email after destructure: {email}</h2>
        {/* <button onClick={this.handleclick}>Update</button> */}
        <button onClick={() => {
          this.setState({
            name: "Rima",
            email: "rima@gmail.com"
          })
        }}>
          UPDATE
        </button>
        <input type="text" onChange={this.handleChange}/>
        <h1>Address: {this.state.address}</h1>

      </>

    )
  }
}