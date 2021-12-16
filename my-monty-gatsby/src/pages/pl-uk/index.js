import * as React from 'react'
import UKHeroImage from '../../assets/images/hero/uk.webp'
import '../../brand/app.scss'
import ContactForm from '../../components/ContactForm'
import HeroSection from '../../components/HeroSection'
import Data from '../../content/pl.json'
import DefaultLayout from '../../Layouts/DefaultLayout'

// markup
const IndexPage = () => {
  return (
    <DefaultLayout baseUrl={'pl-uk'} languages={Data.languages} activeLanguage="poland" activeRegionSlug="uk">
      <HeroSection backgroundImage={UKHeroImage} title="Dołącz do naszej drużyny" mainText={
        `Prześlij swoje <span class="hero__title__cv">CV</span> lub sprawdź nasze <span class="hero__title__vacancies">wakaty</span> dzisiaj <span
 class="hero__title__linkedin">LinkedIn</span> i skontaktujemy się z Tobą <span class="break"/> kiedy znajdziemy <span
 class="hero__title__position">pozycja</span> to pasuje <span class="break"/> twój profil.`
      }/>
      <div className="wrapper">
        <ContactForm/>
      </div>
    </DefaultLayout>
  )
}

export default IndexPage
