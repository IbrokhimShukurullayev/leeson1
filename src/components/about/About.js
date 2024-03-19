import React from "react";
import './about.css'
import aboutCard from '../../assets/images/aboutcard.png'

function About() {
    
    return(
        <section id="about">
            <div className="container">
                <div className="about">
                    <h2 className="about__title">
                        About Us
                    </h2>
                    <p className="about__text">Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
                    <div className="about__row">
                        <div className="about__card">
                            <img src={aboutCard} alt="" />
                            <h3 className="about__card__text">
                                1. Schedule online
                            </h3>
                            <p className="about__list">
                                Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.
                            </p>
                        </div>
                        <div className="about__card">
                            <img src={aboutCard} alt="" />
                            <h3 className="about__card__text">
                                1. Schedule online
                            </h3>
                            <p className="about__list">
                                Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.
                            </p>
                        </div>
                        <div className="about__card">
                            <img src={aboutCard} alt="" />
                            <h3 className="about__card__text">
                                1. Schedule online
                            </h3>
                            <p className="about__list">
                                Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.
                            </p>
                        </div>
                    </div>
                    <div className="about__button">
                        <button className="about__button-1 btn">
                            Get a free quote
                        </button>
                        <button className="about__button-2 btn">
                            Explore services
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About