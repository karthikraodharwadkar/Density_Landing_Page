import React from "react"
import speakerimage from "./ReferalImages/speaker.svg"
import boxpattern from "../../images/boxpattern.svg"
import operatorimage from "./ReferalImages/operator.svg"
import dummyimage from "./ReferalImages/dummy.svg"
import coinimage from "./ReferalImages/coin.svg"
import "./Referal.css"

export default function Referal() {
  return (
    <div className="referal-main-container">
      <div className="referal-container">
        <div className="referal-upper-section">
          <div className="referal-speaker-image">
            <img
              src={speakerimage}
              alt="speakerimage"
              style={{ width: "188px", height: "188px" }}
            />
          </div>
          <div className="referal-header">
            <p>
              Earn Money.{" "}
              <span className="referal-header-subtext">The Easy Way.</span>
            </p>
          </div>
          <div className="referal-content">
            <p>No Complexity of Trading Fee, generate volume and win</p>
          </div>
        </div>
        <div className="referal-mid-section">
            <div className="referal-card">
                <div><img src={boxpattern} alt="boxpattern"/></div>
                <div className="referal-card-image">
                    <img src={operatorimage} alt="operator-image"/>
                </div>
                <div className="referal-card-content">
                    <p>Share your your referral link</p>
                </div>
            </div>
            <div className="referal-card">
                <div><img src={boxpattern} alt="boxpattern"/></div>
                <div className="referal-card-image">
                    <img src={dummyimage} alt="dummy-image"/>
                </div>
                <div className="referal-card-content">
                    <p>Invite Friends to Trade on Density</p>
                </div>
            </div>
            <div className="referal-card">
                <div><img src={boxpattern} alt="boxpattern"/></div>
                <div className="referal-card-image">
                    <img src={coinimage} alt="coin-image"/>
                </div>
                <div className="referal-card-content">
                    <p>Trade <br/>and Earn</p>
                </div>
            </div>
        </div>
        <div className="referal-lower-section">
            <button className="referal-btn">START EARNING NOW</button>
        </div>
      </div>
    </div>
  )
}
