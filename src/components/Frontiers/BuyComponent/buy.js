import React from 'react'
import greendot from "../frontiersimage/greencirculardot.svg"
import "./Buy.css"

export default function Buy() {
  return (
    <div className='buy-main-container'>
        <div className='buy-container'>
            <img src={greendot} alt="greendot"/>
            <span className='buy-text'>Buy</span>
        </div>
    </div>
  )
}
