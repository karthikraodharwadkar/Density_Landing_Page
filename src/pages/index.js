import * as React from "react"

import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import Ratings from "../components/Ratings/Ratings"
import Mobile from "../components/Mobile/Mobile"
import TradeMore from "../components/TradeMore/TradeMore"
import Playground from "../components/Playground/Playground"
import Frontiers from "../components/Frontiers/Frontiers"
import Deposit from "../components/Deposit/Deposit"
import Account from "../components/Account/Account"
import Author from "../components/Author/Author"
import Feedback from "../components/Feedback/Feedback"
import Referal from "../components/Referal/Referal"
import Community from "../components/Community/Community"
import Visionaries from "../components/Visionaries/Visionaries"
import StartTrading from "../components/StartTrading/StartTrading"
import Footer from "../components/Footer/Footer"

const IndexPage = () => (
  <div>
    <Navbar/>
    <Hero/>
    <Ratings/>
    <Mobile/>
    <TradeMore/>
    <Playground/>
    <Frontiers/>
    <Deposit/>
    <Account/>
    <Author/>
    <Feedback/>
    <Referal/>
    <Community/>
    <Visionaries/>
    <StartTrading/>
    <Footer/>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default IndexPage
