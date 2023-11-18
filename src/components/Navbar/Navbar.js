import React from 'react'
import "./Navbar.css"
import logo from "../../images/logo.svg"

export default function Navbar() {
  return (
    <div className='navbar-main-container'>
        <div className='navbar-container'>
            <div className='logo-section'>
                <img src={logo} alt="logo"/>
                
            </div>
            <div className='navbar-items'>
                <p>Career</p>
                <p>blogs</p>
                <p>LeaderBoard</p>
                <p>Fees</p>
                <p className='navbar-button'>TRADE NOW</p>
            </div>
        </div>
    </div>
  )
}
