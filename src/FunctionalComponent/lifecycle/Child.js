import React, { Component } from 'react'

export default class Child extends Component {
  constructor(){
    super()
    this.state={
      data: "suprava"
    }
  }
  componentDidMount(){
    console.log("hello from component did mount method")
  }
  componentDidUpdate(){
    console.log("hello from component did update method")
  }
  handleChnage=(event)=>{
    this.setState({
      data: event.target.value
    })
  }
  render() {
    console.log("render method")
    return (
      <div>Child
      <input type="text" onChange={this.handleChnage}/>
      </div>
    )
  }
}
