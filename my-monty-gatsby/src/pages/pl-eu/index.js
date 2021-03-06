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
    <DefaultLayout baseUrl={'pl-eu'} languages={Data.languages} activeLanguage="pl" activeRegionSlug="eu">
      <HeroSection backgroundImage={GlobalHeroImage} title="Dołącz do naszej drużyny" mainText={
        `Prześlij swoje <span class="hero__title__cv">CV</span> lub sprawdź nasze <span class="hero__title__vacancies">wakaty</span> dzisiaj <a
 class="hero__title__linkedin">LinkedIn</a> i skontaktujemy się z Tobą <span class="break"/> kiedy znajdziemy <span
 class="hero__title__position">pozycja</span> to pasuje <span class="break"/> twój profil.`
      } subTitle={
        {
          help: 'Pomóż nam',
          make: 'uczynić bankowość dostępną dla wszystkich',
        }
      }/>
      <div className="wrapper">
        <ContactForm  title="Prześlij swoje CV"
                      firstName={{
                        label: 'Imię',
                        placeholder: '',
                      }}
                      lastName={{
                        label: 'Nazwisko',
                        placeholder: '',
                      }}
                      emailAddress={{
                        label: 'Adres E-mail',
                        placeholder: '',
                      }}
                      position={{
                        placeholder: '',
                        label: 'Stanowisko Ubiegające Się O Stanowisko',
                      }}
                      additionalInformation={{
                        placeholder: '',
                        label: 'Dodatkowe Informacje',
                      }}
                      cvUpload={{
                        label: 'Prześlij Swoje CV',
                      }}
                      submitButton={{
                        label: 'Składać',
                      }}/>
      </div>
    </DefaultLayout>
  )
}

export default IndexPage
