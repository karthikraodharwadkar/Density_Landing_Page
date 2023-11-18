import React from "react"
import "./Feedback.css"
import prakashimage from "./FeedbackImages/prakash.svg"
import shambhaviimage from "./FeedbackImages/shambhavi.svg"
import arjunimage from "./FeedbackImages/arjun.svg"
import boxpattern from "../../images/boxpattern.svg"

export default function Feedback() {
  return (
    <div className="feedback-main-container">
      <div className="feedback-container">
        <div className="feedback-upper-section">
          <div className="feedback-header">
            <p>Don’t take our word for it.</p>
          </div>
          <div className="feedback-content">
            <p>
              Hear it from our expert community of traders who have made insane
              amounts in a short amount of time
            </p>
          </div>
        </div>
        <div className="feedback-lower-section">
          <div className="feedback-card">
            <div>
              <img
                src={boxpattern}
                alt="boxpattern"
                style={{ position: "relative", left: "75px" }}
              />
            </div>
            <div className="feedback-lower-content">
              <p>
                As someone who's always looking for the next big thing, I was
                really excited to try out Density’s crypto futures trading
                platform. And I have to say, it definitely lived up to my
                expectations.
              </p>
            </div>
            <div className="feedback-user-name">
              <p>Prakash </p>
              <p>Jamatia.</p>
            </div>
            <div className="feedback-user-designation">
              <p>Founder, Tradeshala</p>
            </div>
            <div className="feedback-user-image">
              <img src={prakashimage} alt="prakashimage" />
            </div>
          </div>
          <div className="feedback-card">
            <div>
              <img
                src={boxpattern}
                alt="boxpattern"
                style={{ position: "relative", left: "75px" }}
              />
            </div>
            <div className="feedback-lower-content">
              <p>
                I'm not a seasoned trader, but this website has made it easy for
                me to get started with crypto futures trading. Their KYC was
                very fast and the educational resources were really helpful.
              </p>
            </div>
            <div className="feedback-user-name">
              <p>Shambhavi</p>
              <p>Nayak.</p>
            </div>
            <div className="feedback-user-designation">
              <p>Commodity Trader</p>
            </div>
            <div className="feedback-user-image">
              <img
                src={shambhaviimage}
                alt="shambhaviimage"
                style={{ position: "relative", right: "30px", bottom: "35px" }}
              />
            </div>
          </div>
          <div className="feedback-card">
            <div>
              <img
                src={boxpattern}
                alt="boxpattern"
                style={{ position: "relative", left: "75px" }}
              />
            </div>
            <div className="feedback-lower-content">
              <p>
                I've been using this platform for a few months now and it's been
                a great experience. I was delighted to see all the major crypto
                coins listed on Density Exchange.
              </p>
            </div>
            <div className="feedback-user-name">
              <p>Arjun </p>
              <p>Nayak.</p>
            </div>
            <div className="feedback-user-designation">
              <p>Equity Trader</p>
            </div>
            <div className="feedback-user-image">
              <img
                src={arjunimage}
                alt="arjunimage"
                style={{ position: "relative", right: "30px", bottom: "05px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
