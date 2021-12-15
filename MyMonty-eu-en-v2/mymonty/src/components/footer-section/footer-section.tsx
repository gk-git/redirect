import { Component, h } from '@stencil/core';

@Component({
  tag: 'footer-section',
  styleUrl: 'footer-section.scss',
  shadow: false,
})
export class FooterSection {

  render() {
    return (
      <footer class="footer-section">
        <div class="footer-section__container">
          <div class="footer-section__wrapper">
            <div class="newsletter-form">
              <h5 class="newsletter-form__title">Subscribe to our newsletter</h5>
              <p class="newsletter-form__description">Enter you email to get the latest news from MyMonty</p>
              <form class="newsletter-form__form" action="">
                <input type="email" placeholder='Enter your email' />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
            <div class="navigations">
              <div class="navigation">
                <h5 class="navigation__title">Company</h5>
                <ul class="navigation__items">
                  <li><a href="">Who we are</a></li>
                  <li><a href="">Culture</a></li>
                  <li><a href="">Leadership Team</a></li>
                  <li><a href="">Newsroom</a></li>
                  <li><a href="">Partnership</a></li>
                  <li><a href="">Careers</a></li>
                  <li><a href="">FAQ</a></li>
                </ul>
              </div>

              <div class="navigation">
                <h5 class="navigation__title">Features</h5>
                <ul class="navigation__items">
                  <li><a href="">International Money Transfers</a></li>
                  <li><a href="">Recurring Payments</a></li>
                  <li><a href="">Mobile Payments</a></li>
                  <li><a href="">Bill Splitting</a></li>
                  <li><a href="">Favorite Payments</a></li>
                  <li><a href="">Money Security</a></li>
                </ul>
              </div>

              <div class="navigation">
                <h5 class="navigation__title">Plans</h5>
                <ul class="navigation__items">
                  <li><a href="">Money Security</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

}
