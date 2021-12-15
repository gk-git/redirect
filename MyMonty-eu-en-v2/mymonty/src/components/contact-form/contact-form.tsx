import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'contact-form',
  styleUrl: 'contact-form.scss',
  shadow: false,
})
export class ContactForm {

  render() {
    return (
      <section class="form__section" id="form-section">
        <form class="careers-form">
          <div class="careers-form__title-container">
            <p class="careers-form__title">Submit your CV</p>
          </div>
          <div class="careers-form__container">
            <div class="careers-form__container__input-container">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" />
            </div>
            <div class="careers-form__container__input-container">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" />
            </div>
          </div>
          <div class="careers-form__container">
            <div class="careers-form__container__input-container">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" />
            </div>
            <div class="careers-form__container__input-container">
              <label htmlFor="position">Position Applying For</label>
              <input type="text" id="position" />
            </div>
          </div>
          <div class="careers-form__container">
            <div class="careers-form__container__input-container">
              <label htmlFor="information">Additional Information</label>
              <textarea
                id="information"
                rows={8}
                class="careers-form__container__input-container__textarea"
              ></textarea>
            </div>
          </div>
          <div class="careers-form__container">
            <button class="careers-form__container__cv-btn">
              Upload your CV
            </button>
          </div>
          <div class="careers-form__container">
            <button class="careers-form__container__submit-btn">Submit</button>
          </div>
        </form>
      </section>
    );
  }

}
