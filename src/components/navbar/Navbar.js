import React from "react";
import logo from '../../assets/images/IMAGE.png'
import './navbar.css'

function Navbar() {
    let num = 15
    return(
        <div className="header">
            <nav className="nav container">
                <div className="nav__left">
                    <div className="nav__logo">
                        <a href="#"><img src={logo} alt="" /></a>
                    </div>
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">About</a></li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">Services</a>
                        </li>
                        <li className="nav__item"><a href="#" className="nav__link">Articles </a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Contact </a></li>
                    </ul>
                </div>
                <div className="nav__right">
                    <p className="nav__text">Cart (0)</p>
                    <button className="nav__button">
                        Get a free quote
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar