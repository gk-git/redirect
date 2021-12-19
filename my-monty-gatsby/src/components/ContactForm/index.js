import React from 'react'
import './index.scss'
import SiteInput from '../atoms/Input/Input'

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
          <SiteInput name="first_name" id="first_name" label={firstName.label} type="text"/>
          <SiteInput name="last_name" id="last_name" label={lastName.label} type="text"/>
        </div>
        <div className="careers-form__container">
          <SiteInput name="email" id="email" label={emailAddress.label} type="email"/>
          <SiteInput name="position" id="position" label={position.label} type="text"/>
        </div>
        <div className="careers-form__container">
          <SiteInput name="information" id="information" label={additionalInformation.label} type="textarea"/>
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
