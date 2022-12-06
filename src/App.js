import React from "react"
import Greet from "./Greet"
import StateVariable from "./ClassComponent/StateVariable"
import PropsVariable from "./ClassComponent/PropsVariable"
import Datapassing from "./FunctionalComponent/Datapassing"
import FunctionState from "./FunctionalComponent/FunctionState"
import ChangeEvent from "./FunctionalComponent/ChangeEvent"
import Array from "./ClassComponent/Array"
import Conditionallyrenderning from "./FunctionalComponent/Conditionallyrenderning"
import Main from "./FunctionalComponent/lifecycle/Main"
import Fetch from "./Api/Fetch"
import PassData from "./Api/PassData"
import Design from "./MaterialUi/Design"
import Routing from "./RouterDom/Routing"
export default class App extends React.Component{
  render(){
    return(
      <>
        {/* <h1>Good morning everyone.....</h1> */}
      {/* <Greet/> */}
      {/* <StateVariable/>
      <PropsVariable name="suprava" email="suprava@gmail.com"/> */}
      {/* <Datapassing age={20} address="bbsr"/>
      <FunctionState/> */}
      {/* <ChangeEvent/> */}
      {/* <Array/> */}
      {/* <Conditionallyrenderning/> */}
      {/* <Main/> */}
      {/* <Fetch/> */}
      {/* <PassData/> */}
      {/* <Design/> */}
      <Routing/>
      </>
      
    )
  }
}
