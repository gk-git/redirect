import * as React from "react"
import ContactForm from '../../components/ContactForm'
import HeroSection from '../../components/HeroSection'
import DefaultLayout from "../../Layouts/DefaultLayout"
import Data from '../../content/pl.json';
import "../../brand/app.scss";
// markup
const IndexPage = () => {
    return (
        <DefaultLayout baseUrl={'en-eu'} languages={Data.languages} activeLanguage="english" activeRegionSlug="eu" >
            <HeroSection title="Join our team" text={
              `Submit your <span class="hero__title__cv">CV</span> or check out our <span class="hero__title__vacancies">vacancies</span> today
            on <span class="hero__title__linkedin">LinkedIn</span> and we will reach
            out to you<span class="break"/> once we find
            a <span class="hero__title__position">position</span> that fits <span class="break"/> your profile.`
            }/>
            <div className="wrapper">
              <ContactForm/>
            </div>
        </DefaultLayout>
    )
}

export default IndexPage
