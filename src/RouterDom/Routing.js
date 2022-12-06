import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Contact from './Contact'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about/:id" element={<About/>}/>
          </Route>
          <Route path="*" element={<h1>404 Page Not Found...!!!!</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing