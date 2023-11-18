import React from 'react'
import chartimage from "./Playgroundassest/chart.svg"
import "./Playground.css"

export default function Playground() {
    return (
        <div className='playground-main-container'>
            <div className='playground-container'>
                <div className='uppersection'>
                    <div className='playground-header'>
                        <p>Explore the Markets</p>
                        <p>like it is your <span className='playground-text'>Playground.</span></p>
                    </div>
                    <div className='playground-content'>
                        <p>Search for your favorite coins and stay ahead of the market</p>
                    </div>
                </div>
                <div className='chartsection'>
                    <img src={chartimage} alt="chartsection" className='chart-image'/>
                </div>
                <div className='lowersection'>
                    <button className='explore-btn'>EXPLORE MARKETS</button>
                </div>
            </div>
        </div>
    )
}
