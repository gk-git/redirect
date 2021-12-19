import React from 'react'
import SiteButton from '../atoms/Button/Button'
import FileUpload from '../atoms/FileUpload/FileUpload'
import SiteInput from '../atoms/Input/Input'
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
          <FileUpload label={cvUpload.label}/>
        </div>
        <div className="careers-form__container">
          <SiteButton size="md" type="submit">{submitButton.label}</SiteButton>
        </div>
      </form>
    </section>
  )
}
