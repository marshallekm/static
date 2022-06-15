import React from 'react'
import largeLogo from "../images/react-icon-large.png"

export default function Main(){
  return (
    <div className="main-body">
      <h1 className="main-title">
        Fun facts about React!
      </h1>
      <ul className="main-list">
        <li className="list-item">Was first released in 2013</li>
        <li className="list-item">Was originally created by Jordan Walke</li>
        <li className="list-item">Has well over 100K stars on GitHub</li>
        <li className="list-item">Is maintained by Facebook</li>
        <li className="list-item">Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img src={largeLogo} className= "background-image" />
    </div>
  )
}
