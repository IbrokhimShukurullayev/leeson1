import React from "react";
import articles1 from '../../assets/images/activle1.png'
import './articles.css'

function Articles() {
    
    return(
        <section id="articles">
            <div className="container ">
                <div className="articles">
                    <div className="articles__top">
                        <h2 className="articles__title">Articles & resources</h2>
                        <div className="articles__button">
                            <button className="articles-1">Get a free quote</button>
                            <button className="articles-2">Browse articles</button>
                        </div>
                    </div>
                    <div className="articles__row">
                        <div className="articles_card">
                            <img src={articles1} alt="" />
                            <div className="articles__body">
                                <h2 className="articles__card__title">
                                    8 best vacuum cleaners to clean any mess for your home in 2022
                                </h2>
                                <p className="articles__text">
                                    Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.
                                </p>
                                <p className="articles__day">
                                    Jan 28, 2022
                                </p>
                            </div>
                        </div>
                        <div className="articles_card">
                            <img src={articles1} alt="" />
                            <div className="articles__body">
                                <h2 className="articles__card__title">
                                    8 best vacuum cleaners to clean any mess for your home in 2022
                                </h2>
                                <p className="articles__text">
                                    Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.
                                </p>
                                <p className="articles__day">
                                    Jan 28, 2022
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles