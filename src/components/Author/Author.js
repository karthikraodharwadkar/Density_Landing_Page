import React from "react"
import "./Author.css"
import orios from "./AuthorImages/oriosimage.svg"
import inflection from "./AuthorImages/inflection.svg"
import iseed from "./AuthorImages/iseed.svg"
import polygon from "./AuthorImages/polygon.svg"
import rise from "./AuthorImages/rise.svg"
import tribe from "./AuthorImages/tribe.svg"
import value from "./AuthorImages/value.svg"
import utsavimage from "./AuthorImages/utsav.svg"
import adityaimage from "./AuthorImages/aditya.svg"
import gokulimage from "./AuthorImages/gokul.svg"
import sajidimage from "./AuthorImages/sajid.svg"
import arjunimage from "./AuthorImages/arjun.svg"
import kunalimage from "./AuthorImages/kunal.svg"
import sandeepimage from "./AuthorImages/sandeep.svg"
import karnimage from "./AuthorImages/karn.svg"

export default function Author() {
    return (
        <div className="author-main-container">
            <div className="author-container">
                <div className="author-upper-section">
                    <p className="author-header">Backed by the Best.</p>
                </div>
                <div className="author-lower-section">
                    <div className="author-section-company-logos">
                        <img src={orios} alt="orios-logo" />
                        <img src={inflection} alt="inflection-logo" />
                        <img src={iseed} alt="iseed-logo" />
                        <img src={value} alt="value-logo" />
                        <img src={rise} alt="rise-logo" />
                        <img src={tribe} alt="tribe-logo" />
                        <img src={polygon} alt="polygon-logo" />
                    </div>
                    <div className="author-section-ceo-images">
                        <div className="author-section-ceo-cards">
                            <div className="ceo-image">
                                <img src={utsavimage} alt="utsav-image" />
                            </div>
                            <div className="ceo-description">
                                <p className="ceo-name">Utsav Somani</p>
                                <p className="ceo-company"></p>
                            </div>
                        </div>

                        <div className="author-section-ceo-cards">
                            <div className="ceo-image">
                                <img src={adityaimage} alt="aditya-image" />
                            </div>
                            <div className="ceo-description">
                                <p className="ceo-name">Aditya Nagarsheth</p>
                                <p className="ceo-company">Perpetual Value Partners</p>
                            </div>
                        </div>

                        <div className="author-section-ceo-cards">
                            <div className="ceo-image">
                                <img src={gokulimage} alt="gokul-image" />
                            </div>
                            <div className="ceo-description">
                                <p className="ceo-name">Gokul Rajaram</p>
                                <p className="ceo-company"></p>
                            </div>
                        </div>

                        <div className="author-section-ceo-cards">
                            <div className="ceo-image">
                                <img src={sajidimage} alt="sajid-image" />
                            </div>
                            <div className="ceo-description">
                                <p className="ceo-name">Sajid Rehman</p>
                                <p className="ceo-company">My Asia VC</p>
                            </div>
                        </div>

                        <div className="author-section-ceo-cards">
                            <div className="ceo-image">
                                <img src={arjunimage} alt="arjun-image" />
                            </div>
                            <div className="ceo-description">
                                <p className="ceo-name">Arjun Sethi</p>
                                <p className="ceo-company">Tribe Capital</p>
                            </div>
                        </div>

                        <div className="author-section-ceo-cards">
                            <div className="ceo-image">
                                <img src={kunalimage} alt="kunal-image" />
                            </div>
                            <div className="ceo-description">
                                <p className="ceo-name">Kunal Shah</p>
                                <p className="ceo-company"></p>
                            </div>
                        </div>

                        <div className="author-section-ceo-cards">
                            <div className="ceo-image">
                                <img src={sandeepimage} alt="sandeep-image" />
                            </div>
                            <div className="ceo-description">
                                <p className="ceo-name">Sandeep Nailawal</p>
                                <p className="ceo-company">Polygon Labs</p>
                            </div>
                        </div>

                        <div className="author-section-ceo-cards">
                            <div className="ceo-image">
                                <img src={karnimage} alt="karn-image" />
                            </div>
                            <div className="ceo-description">
                                <p className="ceo-name">Karn Vivek Nagpal</p>
                                <p className="ceo-company"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
