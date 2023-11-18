import React from 'react'
import reddot from "../frontiersimage/redcirculardot.svg"
import "./Sell.css"

export default function Sell() {
  return (
    <div className='sell-main-container'>
        <div className='sell-container'>
            <img src={reddot} alt="reddot"/>
            <span className='sell-text'>Sell</span>
        </div>
    </div>
  )
}
