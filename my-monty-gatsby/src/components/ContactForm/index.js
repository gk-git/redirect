import React from 'react'
import './index.scss'

export default function ContactForm ({
                                       title = 'Submit your CV',
                                       firstName = {
                                         placeholder: '',
                                         label: 'First Name',
                                       },
                                       lastName = {
                                         placeholder: '',
                                         label: 'Last Name',
                                       },
                                       emailAddress = {
                                         placeholder: '',
                                         label: 'Email Address',
                                       },
                                       position = {
                                         placeholder: '',
                                         label: 'Position Applying For',
                                       },
                                       additionalInformation = {
                                         placeholder: '',
                                         label: 'Additional Information',
                                       },
                                       cvUpload = {
                                         label: 'Upload your CV',
                                       },
                                       submitButton = {
                                         label: 'Submit',
                                       },
                                     }) {
  return (
    <section className="form__section" id="form-section">
      <form className="careers-form">
        <div className="careers-form__title-container">
          <p className="careers-form__title">{title}</p>
        </div>
        <div className="careers-form__container">
          <div className="careers-form__container__input-container">
            <label htmlFor="firstName">{firstName.label}</label>
            <input type="text" id="firstName"/>
          </div>
          <div className="careers-form__container__input-container">
            <label htmlFor="lastName">{lastName.label}</label>
            <input type="text" id="lastName"/>
          </div>
        </div>
        <div className="careers-form__container">
          <div className="careers-form__container__input-container">
            <label htmlFor="email">{emailAddress.label}</label>
            <input type="email" id="email"/>
          </div>
          <div className="careers-form__container__input-container">
            <label htmlFor="position">{position.label}</label>
            <input type="text" id="position"/>
          </div>
        </div>
        <div className="careers-form__container">
          <div className="careers-form__container__input-container">
            <label htmlFor="information">{additionalInformation.label}</label>
            <textarea
              id="information"
              rows={8}
              className="careers-form__container__input-container__textarea"
            />
          </div>
        </div>
        <div className="careers-form__container">
          <button className="careers-form__container__cv-btn">
            {cvUpload.label}
          </button>
        </div>
        <div className="careers-form__container">
          <button className="careers-form__container__submit-btn">{submitButton.label}</button>
        </div>
      </form>
    </section>
  )
}
