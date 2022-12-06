import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <Link to="/" >HOME</Link>|
      <Link to="/about/123">ABOUT</Link>|
      <button><Link to="/contact" state={{course: "React"}}>CONTACT</Link></button>
      <Outlet/>
     
    </div>
  )
}

export default Navbar