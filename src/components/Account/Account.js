import React from 'react'
import "./Account.css"
import mainimage from "../../images/heromain.svg"
import herocenter from "../../images/herocenter.svg"
import userimage from "./AccountImages/userimage.svg"
import coinimage from "./AccountImages/coinimage.svg"
import depositimage from "./AccountImages/depositimage.svg"
import chartimage from "./AccountImages/accountchartimage.svg"
import arrowimage from "./AccountImages/arrow.svg"
import horizontalimage from "./AccountImages/horizontalline.svg"

export default function Account() {
    return (
        <div className='account-main-container'>
            <div className='account-container'>
                <div className='account-upper-section'>
                    <div className='account-header'>
                        <p>Derivates made simple in <span className='account-text'>3 Easy</span> Steps</p>
                    </div>
                </div>
                <div className='account-lower-section'>
                    <div className='account-sections'>
                        <div className='account-left-section' style={{ position: "relative" }}>
                            <img src={mainimage} alt="mainimage" className='account-main-image' />
                            <img src={herocenter} alt="herocenterimage" className='account-herocenter-image' />
                        </div>
                        <div className='account-right-section'>
                            <img src={userimage} alt="userimage" className='account-right-section-image' />
                            <p className='account-right-section-header'>Create an Account</p>
                            <p className='account-right-section-content'>Register & Complete your Verification in less than 2 minutes</p>
                            <button className='account-right-section-btn'>TRADE NOW</button>
                        </div>
                    </div>
                    <div><img src={horizontalimage} /></div>
                    <div className='account-sections'>
                        <div className='account-left-section' style={{ position: "relative" }}>
                            <img src={mainimage} alt="mainimage" className='account-main-image' />
                            <img src={depositimage} alt="herocenterimage" className='account-herocenter-image' />
                        </div>
                        <div className='account-right-section'>
                            <img src={coinimage} alt="userimage" className='account-right-section-image' />
                            <p className='account-right-section-header'>Deposit Funds</p>
                            <p className='account-right-section-content'>Add funds quickly using a variety <br />of payment methods</p>
                            <button className='account-right-section-btn'>TRADE NOW</button>
                        </div>
                    </div>
                    <div><img src={horizontalimage} /></div>
                    <div className='account-sections'>
                        <div className='account-left-section' style={{ position: "relative" }}>
                            <img src={mainimage} alt="mainimage" className='account-main-image' />
                            <img src={chartimage} alt="herocenterimage" className='account-herocenter-image' />
                        </div>
                        <div className='account-right-section'>
                            <img src={arrowimage} alt="userimage" className='account-right-section-image' />
                            <p className='account-right-section-header'>Become a Trader</p>
                            <p className='account-right-section-content'>Choose Your Trading Pair & Trade Seamlessly</p>
                            <button className='account-right-section-btn'>TRADE NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
