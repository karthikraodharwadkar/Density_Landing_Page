import React from 'react'
import "./StartTrading.css"
import panelimage from "./StartTradingImages/panel.svg"

export default function StartTrading() {
  return (
    <div className='trade-main-conatiner'>
        <div className='trade-container'>
                <p className='start-trade-header'>Get started now.</p>
                <img src={panelimage} alt="panelimage" className='start-trade-image'/>
                <button className='start-trading-btn'>Start Trading!</button>
        </div>
    </div>
  )
}
