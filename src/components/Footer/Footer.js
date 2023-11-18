import React from "react"
import "./Footer.css"
import DensityImage from "./FooterImages/Densitylogo.svg"
import facebookimage from "./FooterImages/facebook.svg"
import twitterimage from "./FooterImages/twitter.svg"
import linkedinimage from "./FooterImages/linkedin.svg"
import instaimage from "./FooterImages/insta.svg"

export default function Footer() {
  return (
    <div className="footer-main-container">
      <div className="footer-container">
        <div className="footer-upper-section">
          <div className="footer-header">
            <img src={DensityImage} alt="DensityImage" />
          </div>
        </div>
        <div className="footer-mid-section">
          <div className="footer-mid-section1">
            <p>Blog</p>
            <p>Fees</p>
            <p>Leaderboard</p>
            <p>Careers</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
          </div>
          <div className="footer-mid-section2">
            <p>
              Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
              diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
              muvåning, och pesask vyfisat. Viktiga poddradio har un mad och
              inde.
            </p>
          </div>
        </div>
        <div className="footer-lower-section">
            <img src={facebookimage} alt="facebookimage"/>
            <img src={twitterimage} alt="twitterimage"/>
            <img src={linkedinimage} alt="linkedinimage"/>
            <img src={instaimage} alt="instaimage"/>
        </div>
      </div>
    </div>
  )
}
