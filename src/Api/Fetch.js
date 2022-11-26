import React, { Component } from 'react'
import axios from  "axios"
export default class Fetch extends Component {
  constructor(){
    super()
    this.state={
      user: []
    }
  }
  componentDidMount(){
    // fetch("https://reqres.in/api/users?page=2")
    // .then((response)=>(response.json()))
    // .then((result)=>{
    //   console.log(result)
    //   this.setState({
    //     user: result.data
    //   })
    // })

    const res=axios.get("https://reqres.in/api/users?page=2")
    .then((result)=>{
      console.log(result)
      this.setState({
            user: result.data.data
          })
    })
  }
  render() {
    return (
      <div>
      Fetch Data
    {this.state.user.map((item,i)=>{
return(
  <div>
  <li>{item.first_name}
  <img src={item.avatar} alt="image"/>
  </li>
  </div>
)
    })}
      </div>
    )
  }
}
