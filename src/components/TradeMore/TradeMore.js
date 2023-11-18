import React from 'react'
import "./TradeMore.css"
import coinDCX from "./trademoreassest/coinDCX.svg"
import density from "./trademoreassest/density.svg"
import deltaexchange from "./trademoreassest/deltaexchange.svg"
import pattern from "./trademoreassest/pattern.svg"

export default function TradeMore() {
  return (
    <div className='trade-main-section'>
        <div className='trade-section'>
            <div className='trade-uppersection'>
                <div className='trade-header'>
                    <p>Trade More. <span className='pay-less-text'>Pay Less.</span></p>
                </div>
                <div className='trade-content'>
                    <p>Our low Fees Supercharge Your Profits</p>
                </div>
            </div>
            <div className='trade-lowersection'>
                <div className='trade-cards'>
                    <div className='trade-logo'>
                        <img src={coinDCX} alt="coinDCX-logo"/>
                        <img src={pattern} alt="pattern-logo" className='pattern-img'/>
                    </div>
                    <div className='maker-fees'>
                        <p className='fee-amount'>0.025</p>
                        <p className='fee-text'>Maker Fees</p>
                    </div>
                    <div className='taker-fees'>
                        <p className='fee-amount'>0.07</p>
                        <p className='fee-text'>Taker Fees</p>
                    </div>
                </div>
                <div className='trade-cards' id="density-card">
                    <div className='trade-logo'>
                        <img src={density} alt="density-logo"/>
                        <img src={pattern} alt="pattern-logo" className='pattern-img'/>
                    </div>
                    <div className='maker-fees' >
                        <p className='fee-amount' id="density-card-text">0.02</p>
                        <p className='fee-text' id="density-card-text">Maker Fees</p>
                    </div>
                    <div className='taker-fees' id="density-card-text">
                        <p className='fee-amount' id="density-card-text">0.04</p>
                        <p className='fee-text' id="density-card-text">Taker Fees</p>
                    </div>
                </div>
                <div className='trade-cards'>
                    <div className='trade-logo'>
                        <img src={deltaexchange} alt="deltaexchange-logo"/>
                        <img src={pattern} alt="pattern-logo" className='pattern-img'/>
                    </div>
                    <div className='maker-fees'>
                        <p className='fee-amount'>0.02</p>
                        <p className='fee-text'>Maker Fees</p>
                    </div>
                    <div className='taker-fees'>
                        <p className='fee-amount'>0.05</p>
                        <p className='fee-text'>Taker Fees</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
