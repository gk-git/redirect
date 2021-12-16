import React from 'react'
import "./index.scss";

import FooterContentFrom from "../../content/footer.json";
export default function Footer({activeLanguage}) {
  const { subscribe } = FooterContentFrom[activeLanguage];
  return (
    <footer className="footer-section">
      <div className="footer-section__container">
        <div className="footer-section__wrapper">
          <div className="newsletter-form">
            <h5 className="newsletter-form__title">{subscribe.title}</h5>
            <p className="newsletter-form__description">{subscribe.description}</p>
            <form className="newsletter-form__form" action="">
              <input type="email" placeholder={subscribe.emailInput.placeholder}/>
              <input type="submit" value={subscribe.submitButton.label}/>
            </form>
          </div>
          <div className="navigations">
            <div className="navigation">
              <h5 className="navigation__title">Company</h5>
              <ul className="navigation__items">
                <li><a href="">Who we are</a></li>
                <li><a href="">Culture</a></li>
                <li><a href="">Leadership Team</a></li>
                <li><a href="">Newsroom</a></li>
                <li><a href="">Partnership</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">FAQ</a></li>
              </ul>
            </div>
          
            <div className="navigation">
              <h5 className="navigation__title">Features</h5>
              <ul className="navigation__items">
                <li><a href="">International Money Transfers</a></li>
                <li><a href="">Recurring Payments</a></li>
                <li><a href="">Mobile Payments</a></li>
                <li><a href="">Bill Splitting</a></li>
                <li><a href="">Favorite Payments</a></li>
                <li><a href="">Money Security</a></li>
              </ul>
            </div>
          
            <div className="navigation">
              <h5 className="navigation__title">Plans</h5>
              <ul className="navigation__items">
                <li><a href="">Money Security</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
