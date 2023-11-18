import React from 'react'
import "./Frontiers.css"
import verticalLine from "./frontiersimage/verticalLine.svg"
import leftchartimage from "./frontiersimage/leftchart.svg"
import rightchartimage from "./frontiersimage/rightchart.svg"
import Sell from './Sellcomponent/Sell'
import Buy from './BuyComponent/buy'
import verticalline from "./frontiersimage/frontierverticalline.svg"


export default function Frontiers() {
    return (
        <div className='frontiers-main-container'>
            <div className='frontiers-container'>
                <div className='frontier-upper-section'>
                    <div className='frontier-header'>
                        <p><span className='frontier-unlock-text'>Unlock</span> New Frontiers.</p>
                    </div>
                    <div className='frontier-content'>
                        <p>Are you a stock trader looking for new opportunities to make money? We got you covered!</p>
                    </div>
                </div>
                <div className='frontier-mid-section'>
                    <div className='mid-section-text'>Same Strategies</div>
                    <img src={verticalLine} alt="verticalLine" className='verticalLine'/>
                    <div className='mid-section-text'>Same Indicators</div>
                    <img src={verticalLine} alt="verticalLine" className='verticalLine'/>
                    <div className='mid-section-text'>Better Leverage</div>
                    <img src={verticalLine} alt="verticalLine" className='verticalLine'/>
                    <div className='mid-section-text'>24x7 Trading</div>
                </div>
                <div className='frontier-lower-section'>
                    <div className='chart-left-section'>
                        <p className='left-chart-text'>BTCUSDT</p>
                        <img src={leftchartimage} alt="leftchartimage"/>
                        <div className='sell-component-1'><Sell/></div>
                        <div className='sell-component-2'><Sell/></div>
                        <div className='sell-component-3'><Sell/></div>
                        <div className='buy-component-1'><Buy/></div>
                        <div className='buy-component-2'><Buy/></div>
                    </div>
                    <div className='frontierverticalline'>
                        <img src={verticalline} alt="frontierverticalline"/>
                    </div>
                    <div className='chart-right-section'>
                        <img src={rightchartimage} alt="rightchartimage" className='frontier-rightchartimage'/>
                        <p className='right-chart-text'>NIFTY</p>
                        <div className='sell-component-4'><Sell/></div>
                        <div className='buy-component-3'><Buy/></div>
                        <div className='buy-component-4'><Buy/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
