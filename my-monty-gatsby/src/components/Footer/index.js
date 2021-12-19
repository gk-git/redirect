import React from 'react'
import "./index.scss";
import NewsletterForm from '../NewsletterForm'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-section__container">
        <div className="footer-section__wrapper">
          <NewsletterForm />
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
