import React from 'react'
import "./Ratings.css"

export default function Ratings() {
  return (
    <div className='rating-main-container'>
        <div className='rating-container'>
            <div className='rating-section'>
                <div className='rating-sub-section-header'>
                    <p>00%</p>
                </div>
                <div className='rating-sub-section-content'>
                    <p>Conversion Fee</p>
                </div>
            </div>
            <div className='vertical-line'></div>
            <div className='rating-section'>
                <div className='rating-sub-section-header'>
                    <p>500 Mn+</p>
                </div>
                <div className='rating-sub-section-content'>
                    <p>Lifetime Volume Traded</p>
                </div>
            </div>
            <div className='vertical-line'></div>
            <div className='rating-section'>
                <div className='rating-sub-section-header'>
                    <p>250+</p>
                </div>
                <div className='rating-sub-section-content'>
                    <p>Total Tradable Pairs</p>
                </div>
            </div>
            <div className='vertical-line'></div>
            <div className='rating-section'>
                <div className='rating-sub-section-header'>
                    <p>15,000+</p>
                </div>
                <div className='rating-sub-section-content'>
                    <p>Traders</p>
                </div>
            </div>
        </div>
    </div>
  )
}
