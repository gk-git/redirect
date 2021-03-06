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
    <DefaultLayout baseUrl={'it-pl'} languages={Data.languages} activeLanguage="it" activeRegionSlug="pl">
      <HeroSection backgroundImage={PolandHeroImage} title="Entra nel nostro gruppo" mainText={
        `Invia il tuo <span class="hero__title__cv">CV</span> o dai un'occhiata al nostro <span class="hero__title__vacancies">posti vacanti</span>oggi in
         poi <a class="hero__title__linkedin">LinkedIn</a> e ti contatteremo <span class="break"/>una volta che troviamo
          a <span class="hero__title__position">posizione</span> Questo va bene <span class="break"/> Il tuo profilo.`
      } subTitle={
        {
          help: 'Aiutaci',
          make: 'rendere i servizi bancari accessibili a tutti',
        }
      }/>
      <div className="wrapper">
        <ContactForm title="Invia Il Tuo CV"
                     firstName={{
                       label: 'Nome Di Battesimo',
                       placeholder: '',
                     }}
                     lastName={{
                       label: 'Cognome',
                       placeholder: '',
                     }}
                     emailAddress={{
                       label: 'Indirizzo Email',
                       placeholder: '',
                     }}
                     position={{
                       placeholder: '',
                       label: 'Posizione Candidata Per',
                     }}
                     additionalInformation={{
                       placeholder: '',
                       label: 'Informazioni Aggiuntive',
                     }}
                     cvUpload={{
                       label: 'Carica Il Tuo CV',
                     }}
                     submitButton={{
                       label: 'Invia',
                     }}/>
      </div>
    </DefaultLayout>
  )
}

export default IndexPage
