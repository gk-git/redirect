import * as React from 'react'
import ItalyHeroImage from '../../assets/images/hero/italy.webp'
import '../../brand/app.scss'
import ContactForm from '../../components/ContactForm'
import HeroSection from '../../components/HeroSection'
import Data from '../../content/pl.json'
import DefaultLayout from '../../Layouts/DefaultLayout'

// markup
const IndexPage = () => {
  return (
    <DefaultLayout baseUrl={'it-it'} languages={Data.languages} activeLanguage="italy" activeRegionSlug="it">
      <HeroSection backgroundImage={ItalyHeroImage} title="Entra nel nostro gruppo" mainText={
        `Invia il tuo <span class="hero__title__cv">CV</span> o dai un'occhiata al nostro <span class="hero__title__vacancies">posti vacanti</span>oggi in
         poi <span class="hero__title__linkedin">LinkedIn</span> e ti contatteremo <span class="break"/>una volta che troviamo
          a <span class="hero__title__position">posizione</span> Questo va bene <span class="break"/> Il tuo profilo.`
      }/>
      <div className="wrapper">
        <ContactForm/>
      </div>
    </DefaultLayout>
  )
}

export default IndexPage
