import React from "react"
import "./Visionaries.css"
import linkedin from "./VisionariesImage/linkedin.svg"
import akashimage from "./VisionariesImage/Akash.svg"
import baxpattern from "../../images/boxpattern.svg"
import bhupendraimage from "./VisionariesImage/bhupendra.svg"
import deepakimage from "./VisionariesImage/deepak.svg"

export default function Visionaries() {
  return (
    <div className="vision-main-container">
      <div className="vision-container">
        <div className="vision-upper-section">
          <div className="vision-header">
            <p>
              Meet the <span className="visionaries-text">Visionaries</span>{" "}
              behind Density.
            </p>
          </div>
        </div>
        <div className="vision-lower-section">
          <div className="vision-card">
            <img
              className="vision-card-boxpattern-image"
              src={baxpattern}
              alt="baxpattern-image"
            />
            <p className="vision-card-ceo-name">Aakash Neeraj Mittal</p>
            <p className="vision-card-ceo-company">CEO, Density</p>
            <div className="linkedin-image">
              <img src={linkedin} alt="linkedin-logo" />
            </div>
            <div>
              <img
                className="vision-card-ceo-image"
                src={akashimage}
                alt="akashimage"
              />
            </div>
          </div>
          <div className="vision-card">
            <img
              className="vision-card-boxpattern-image"
              src={baxpattern}
              alt="baxpattern-image"
            />
            <p className="vision-card-ceo-name">Bhupendra Bule</p>
            <p className="vision-card-ceo-company">CTO, Density</p>
            <div className="linkedin-image">
              <img src={linkedin} alt="linkedin-logo" />
            </div>
            <div>
              <img
                className="vision-card-ceo-image"
                src={bhupendraimage}
                alt="bhupendraimage"
                style={{ position: "relative", left: "90px", bottom: "390px" }}
              />
            </div>
          </div>
          <div className="vision-card">
            <img
              className="vision-card-boxpattern-image"
              src={baxpattern}
              alt="baxpattern-image"
            />
            <p className="vision-card-ceo-name">Deepak Vasman</p>
            <p className="vision-card-ceo-company">CBO, Density</p>
            <div className="linkedin-image">
              <img src={linkedin} alt="linkedin-logo" />
            </div>
            <div>
              <img
                className="vision-card-ceo-image"
                src={deepakimage}
                alt="deepakimage"
                style={{ position: "relative", left: "70px", bottom: "382.5px" }}
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
