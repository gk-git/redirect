import React from 'react'
import "./index.scss"
export default function ContactForm () {
  return (
    <section className="form__section" id="form-section">
      <form className="careers-form">
        <div className="careers-form__title-container">
          <p className="careers-form__title">Submit your CV</p>
        </div>
        <div className="careers-form__container">
          <div className="careers-form__container__input-container">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName"/>
          </div>
          <div className="careers-form__container__input-container">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName"/>
          </div>
        </div>
        <div className="careers-form__container">
          <div className="careers-form__container__input-container">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email"/>
          </div>
          <div className="careers-form__container__input-container">
            <label htmlFor="position">Position Applying For</label>
            <input type="text" id="position"/>
          </div>
        </div>
        <div className="careers-form__container">
          <div className="careers-form__container__input-container">
            <label htmlFor="information">Additional Information</label>
            <textarea
              id="information"
              rows={8}
              className="careers-form__container__input-container__textarea"
            />
          </div>
        </div>
        <div className="careers-form__container">
          <button className="careers-form__container__cv-btn">
            Upload your CV
          </button>
        </div>
        <div className="careers-form__container">
          <button className="careers-form__container__submit-btn">Submit</button>
        </div>
      </form>
    </section>
  )
}
