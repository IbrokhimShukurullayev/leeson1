import React from "react";
import phone from '../../assets/images/phone.png'
import home2 from '../../assets/images/home2.png'
import './home.css'

function Home() {
    
    return(
        <section id="home">
            <div className="container">
                <div className="home">
                    <div className="home__left">
                        <h1 className="home__title">
                            Quality cleaning for your home
                        </h1>
                        <p className="home__text">
                            Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.
                        </p>
                        <div className="home__footer">
                            <button className="home__button">Get a free quote</button>
                            <div className="home__cantact">
                                <img src={phone} alt="" />
                                <div>
                                    <p className="home__list">
                                        Call us now
                                    </p>
                                    <a className="home__link" href="(414) 567 - 2109" target="_blank" rel="noopener noreferrer">(414) 567 - 2109</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home__right">
                        <img src={home2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home