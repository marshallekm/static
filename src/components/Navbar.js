import React from 'react'
import reactLogo from "../images/logo192.png"

export default function Navbar(){
  return (
    <nav>
        <img src={reactLogo} className= "image"/>
         <h3 className= "title">ReactFacts</h3>
         <h4 className= "p">React Course - Project 1</h4>
    </nav>
  )
}
