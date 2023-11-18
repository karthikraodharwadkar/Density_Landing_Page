import React from 'react'
import "./Mobile.css"
import mobileouter from "./mobileassest/mobileouter.svg"
import graphimage from "./mobileassest/graphimage.svg"
import ellipse1815 from "./mobileassest/ellipse1815.svg"
import ellipse1816 from "./mobileassest/ellipse1816.svg"
import stepimage from "./mobileassest/stepimage.svg"
import coinimage from "./mobileassest/coinimage.svg"

export default function Mobile() {
  return (
    <div className='mobile-main-container'>
        <div className='mobile-container'>
            <div className='mobile-section'>
                <img src={mobileouter} alt="mobileouter" className='mobileouter'/>
                <img src={graphimage} alt="graphimage" className='graphimage'/>
                <p className="mobile-graph-content">One App. Endless Possibilities</p>
                <img src={ellipse1815} alt="ellipse1815" className="ellipse-left"/>
                <img src={ellipse1816} alt="ellipse1816" className="ellipse-right"/>
            </div>
            <div className='mobile-section'>
              <img src={mobileouter} alt="mobileouter" className='mobileouter'/>
                <img src={coinimage} alt="coinimage" className='coinimage'/>
                <p className="mobile-coin-content">Future of Derivative Trading.</p>
                <img src={ellipse1815} alt="ellipse1815" className="ellipse-right"/>
                <img src={ellipse1816} alt="ellipse1816" className="ellipse-left"/>
            </div>
            <div className='mobile-section'>
                <img src={mobileouter} alt="mobileouter" className='mobileouter'/>
                <img src={stepimage} alt="stepimage" className='stepimage'/>
                <p className="mobile-step-content">Is now here, for you.</p>
                <img src={ellipse1815} alt="ellipse1815" className="ellipse-right"/>
                <img src={ellipse1816} alt="ellipse1816" className="ellipse-left"/>
            </div>
        </div>
    </div>
  )
}
