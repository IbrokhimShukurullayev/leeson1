import React from "react";
import services1 from '../../assets/images/services1.png'
import './services.css'

function Services() {
    
    return(
        <section id="services">
            <div className="container">
                <div className="services">
                    <div className="services__top">
                        <h2 className="services__title">
                            Our Services
                        </h2>
                        <button className="services__button">
                            Explore services
                        </button>
                    </div>
                    <div className="services__row">
                        <div className="services__card">
                            <img src={services1} alt="" />
                            <h2 className="services__title">House cleaning</h2>
                            <p className="services__text">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                        </div>
                        <div className="services__card">
                            <img src={services1} alt="" />
                            <h2 className="services__title">House cleaning</h2>
                            <p className="services__text">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                        </div>
                        <div className="services__card">
                            <img src={services1} alt="" />
                            <h2 className="services__title">House cleaning</h2>
                            <p className="services__text">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services