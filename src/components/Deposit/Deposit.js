import React from "react"
import "./Deposit.css"
import percentageImage from "./DepositImages/percentageImage.svg"
import managerImage from "./DepositImages/ManagerImage.svg"
import boxpattern from "../../images/boxpattern.svg"

export default function Deposit() {
  return (
    <div className="deposit-main-container">
      <div className="deposit-container">
        <div className="deposit-upper-section">
          <div className="deposit-header">
            <p>Start Small. Earn Big.</p>
          </div>
          <div className="deposit-content">
            <p>
              Deposity a minimum of 1000 and get a Deposit bonus + dedicagted
              relationship manager
            </p>
          </div>
        </div>
        <div className="deposit-lower-section">
          <div className="deposit-left-section">
            <div className="deposit-left-images">
              <img
                src={percentageImage}
                alt="25% Image"
                className="percentage-image"
              />
               <img
                src={boxpattern}
                alt="boxpattern-image"
                className="boxpattern-image"
              />
            </div>
            
            <div className="deposit-left-content">
              <div className="deposit-left-sub-header">
                <p>Deposit Bonus.</p>
              </div>
              <div className="deposit-left-sub-content">
                <p>
                  Our assets' liquidity is unmatched in the market, with a small
                  bid-ask spread and a well-balanced order book.
                </p>
              </div>
            </div>
          </div>
          <div className="deposit-right-section">
            <div>
              <img
                src={managerImage}
                alt="Manager Image"
                className="manager-image"
              />
              <img
                src={boxpattern}
                alt="boxpattern-image"
                className="boxpattern-image"
              />
            </div>
            <div className="deposit-right-content">
              <div className="deposit-right-sub-header">
                <p>
                  Dedicated
                  <br /> Relationship Manager.
                </p>
              </div>
              <div className="deposit-right-sub-content">
                <p>
                  Our assets' liquidity is unmatched in the market, with a small
                  bid-ask spread and a well-balanced order book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
