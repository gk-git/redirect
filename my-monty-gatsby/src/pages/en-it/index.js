import * as React from 'react'
import ItalyHeroImage from '../../assets/images/hero/italy.webp'
import '../../brand/app.scss'
import ContactForm from '../../components/ContactForm'
import HeroSection from '../../components/HeroSection'
import DefaultLayout from '../../Layouts/DefaultLayout'

// markup
const IndexPage = () => {
  
  return (
    <DefaultLayout baseUrl={'en-it'} activeLanguage="en" activeRegionSlug="it">
      <HeroSection backgroundImage={ItalyHeroImage} title="Join our team" mainText={
        `Submit your <span class="hero__title__cv">CV</span> or check out our <span class="hero__title__vacancies">vacancies</span> today
            on <a class="hero__title__linkedin">LinkedIn</a> and we will reach
            out to you<span class="break"/> once we find
            a <span class="hero__title__position">position</span> that fits <span class="break"/> your profile.`
      } subTitle={
        {
          help: 'Help us',
          make: 'make banking accessible for all',
        }
      }/>
      <div className="wrapper">
        <ContactForm title="Submit your CV"
                     firstName={{
                       label: 'First Name',
                       placeholder: '',
                     }}
                     lastName={{
                       label: 'Last Name',
                       placeholder: '',
                     }}
                     emailAddress={{
                       label: 'Email Address',
                       placeholder: '',
                     }}
                     position={{
                       placeholder: '',
                       label: 'Position Applying For',
                     }}
                     additionalInformation={{
                       placeholder: '',
                       label: 'Additional Information',
                     }}
                     cvUpload={{
                       label: 'Upload your CV',
                     }}
                     submitButton={{
                       label: 'Submit',
                     }}/>
      </div>
    </DefaultLayout>
  )
}

export default IndexPage
