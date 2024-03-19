import React from "react";
import phone from '../../assets/images/phone.png'
import './cantact.css'

function Cantact() {
    
    return(
        <section id="cantact">
            <div className="container ">
                <div className="cantact">
                    <div className="cantact__left">
                        <h2 className="cantact__title">
                            Contact Us
                        </h2>
                        <p className="cantact__text">
                            In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.
                        </p>
                         <div className="home__cantact btns">
                            <img src={phone} alt="" />
                            <div>
                                <p className="home__list">
                                    Call us now
                                </p>
                                <a className="home__link" href="(414) 567 - 2109" target="_blank" rel="noopener noreferrer">(414) 567 - 2109</a>
                            </div>
                        </div>
                        <div className="text"></div>
                        <h3 className="cantact__texts">
                            Not convinced yet?
                        </h3>
                        <p className="cantact__lists">
                            Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.
                        </p>
                        <button className="btn about__button-2">
                            Browse our packages
                        </button>
                    </div>
                    <div className="canatact__right">
                        <form className="form">
                            <div className="form__name">
                                <div>
                                    <label htmlFor="Full name">Full name</label> <br/>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label htmlFor="Phone number">Phone number</label> <br/>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="form__name">
                                <div>
                                    <label htmlFor="Address">Address</label> <br/>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label htmlFor="Email">Email</label> <br/>
                                    <input type="email" />
                                </div>
                            </div>
                            <div className="form__name">
                                <div>
                                    <label htmlFor="Requested service">Requested service</label> <br/>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label htmlFor="Day of service">Day of service</label> <br/>
                                    <input type="text" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="Add a note">Add a note</label><br />
                                <textarea name="" id="" cols="57" rows="10">

                                </textarea>
                            </div>
                            <button className="articles-1 cantact__btn">Submit message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cantact