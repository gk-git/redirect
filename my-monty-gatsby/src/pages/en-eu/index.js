import * as React from 'react'
import GlobalHeroImage from '../../assets/images/hero/global.webp'

import '../../brand/app.scss'
import ContactForm from '../../components/ContactForm'
import HeroSection from '../../components/HeroSection'
import Data from '../../content/pl.json'
import DefaultLayout from '../../Layouts/DefaultLayout'
// markup
const IndexPage = () => {
  return (
    <DefaultLayout baseUrl={'en-eu'} languages={Data.languages} activeLanguage="english" activeRegionSlug="eu">
      <HeroSection backgroundImage={GlobalHeroImage} title="Join our team" mainText={
        `Submit your <span class="hero__title__cv">CV</span> or check out our <span class="hero__title__vacancies">vacancies</span> today
            on <span class="hero__title__linkedin">LinkedIn</span> and we will reach
            out to you<span class="break"/> once we find
            a <span class="hero__title__position">position</span> that fits <span class="break"/> your profile.`
      } subTitle={
        {
          help: 'Help us',
          make: 'make banking accessible for all',
        }
      }/>
      <div className="wrapper">
        <ContactForm/>
      </div>
    </DefaultLayout>
  )
}

export default IndexPage
