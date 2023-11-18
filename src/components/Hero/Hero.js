import React from "react"
import heromain from "../../images/heromain.svg"
import heroleftimage from "../../images/heroleft.svg"
import herocenterimage from "../../images/herocenter.svg"
import herorightimage from "../../images/heroright.svg"

import "./Hero.css"

export default function Hero() {
    return (
        <div className="hero-main-container">
            <div className="hero-container">
                <div className="hero-header">
                    <div className="hero-header-title">
                        <p>It’s time to trade,</p>
                        <p>
                            the <span className="hero-future-text">future.</span>
                        </p>
                    </div>
                    <div className="hero-header-content">
                        <p>Trade BTC, ETH Futures with 125x leverage and earn rewards.</p>
                    </div>
                </div>
                <div className="hero-images">
                    <div className="hero-section-images">
                        <div className="hero-leftimage-container">
                            <img src={heromain} alt="hero-main-image" className="hero-left-main-image"/>
                            <img src={heroleftimage} alt="hero-left-image" className="hero-left-image"/>
                        </div>
                        <div className="hero-rightimage-container">
                            <img src={heromain} alt="hero-main-image" className="hero-right-main-image"/>
                            <img src={herorightimage} alt="hero-right-image" className="hero-right-image"/>
                        </div>
                        <div className="hero-centerimage-container">
                            <img src={heromain} alt="hero-main-image" className="hero-center-main-image"/>
                            <img src={herocenterimage} alt="hero-center-image" className="hero-center-image"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
