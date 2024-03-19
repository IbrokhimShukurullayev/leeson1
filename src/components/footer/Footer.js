import React from 'react'
import './Footer.css'
import footer1 from "../../assets/images/footer1.png"

function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
            <ul>
              <li>
                <h2 className='footer__title'>Quality cleaning for your home</h2>
              </li>
              <li>
                <p className='footer__text'>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
              </li>
              <li>
                <img src={footer1} alt="" />
              </li>
            </ul>
            <ul>
              <li>
                <h2 className="footer__list">
                  Contact us
                </h2>
                <p className='footer__text__list text__list'>
                  1827 Nickel Road, Los Angeles, CA, 90017, United States
                </p>
                <p className='footer__text__list list__text'>
                  (414) 567 - 2109
                </p>
                <p className='footer__text__list'>
                  contact@cleaning.com
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <h2 className='footer__list'>Hours</h2>
                <h3 className='footer__listss'>Monday to Friday</h3>
                <p className="footer__text__list list-text">6:00 AM - 9:00 PM</p>
                <h3 className="footer__listss">Saturday & Sunday</h3>
                <p className="footer__text__list">
                  Saturday & Sunday 
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <h2 className="footer__list">Get a free estimate</h2>
              </li>
              <li>
                <h2 className="phone__number">
                  (414) 567 - 2109
                </h2>
              </li>
              <li>
                <p className='footer__text'>
                  Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.
                </p>
              </li>
              <li>
                <button className='articles-1'>
                  Request a free quote
                </button>
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer