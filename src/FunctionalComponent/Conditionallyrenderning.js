import React, { useState } from 'react'

function Conditionallyrenderning() {
const[show,setShow]=useState(false)
  return (
    <div>
     {show===false?<h1>Suprava</h1>:<h1>Sorry..try again</h1>}

     {show===false &&
     <p>Nextstacks</p>}
    </div>
  )
}

export default Conditionallyrenderning