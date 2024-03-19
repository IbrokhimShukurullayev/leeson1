import React from "react";
import covid from '../../assets/images/covid.png'
import phone from '../../assets/images/phone.png'
import './covid.css'

function Covid() {
    
    return(
        <section id="covid">
            <div className="container covids">
                <div className="covid">
                    <div className="covid__left">
                    <img src={covid} alt="" />
                    </div>
                    <div className="covid__right">
                        <p className="covid__list">Covid-19 sanitization</p>
                        <h2 className="covid__title">We follow guidelines to keep you safe from the COVID-19 virus</h2>
                        <p className="covid__text">
                            Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.
                        </p>
                        <div className="covid__footer">
                            <button className="covid__button">Get a free quote</button>
                            <div className="covid__cantact">
                                <img src={phone} alt="" />
                                <div>
                                    <p className="covid__lists">
                                        Call us now
                                    </p>
                                    <a className="covid__link" href="(414) 567 - 2109" target="_blank" rel="noopener noreferrer">(414) 567 - 2109</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Covid