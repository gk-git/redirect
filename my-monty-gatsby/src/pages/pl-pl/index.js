import * as React from 'react'
import PolandHeroImage from '../../assets/images/hero/poland.webp'
import '../../brand/app.scss'
import ContactForm from '../../components/ContactForm'
import HeroSection from '../../components/HeroSection'
import Data from '../../content/pl.json'
import DefaultLayout from '../../Layouts/DefaultLayout'

// markup
const IndexPage = () => {
  return (
    <DefaultLayout baseUrl={'pl-pl'} languages={Data.languages} activeLanguage="poland" activeRegionSlug="pl">
      <HeroSection backgroundImage={PolandHeroImage} title="Dołącz do naszej drużyny" mainText={
        `Prześlij swoje <span class="hero__title__cv">CV</span> lub sprawdź nasze <span class="hero__title__vacancies">wakaty</span> dzisiaj <span
 class="hero__title__linkedin">LinkedIn</span> i skontaktujemy się z Tobą <span class="break"/> kiedy znajdziemy <span
 class="hero__title__position">pozycja</span> to pasuje <span class="break"/> twój profil.`
      } subTitle={
        {
          help: 'Pomóż nam',
          make: 'uczynić bankowość dostępną dla wszystkich',
        }
      }/>
      <div className="wrapper">
        <ContactForm/>
      </div>
    </DefaultLayout>
  )
}

export default IndexPage
