import React from 'react'
import FooterContentFrom from '../../content/footer.json'
import "./index.scss"
import { useSiteContext } from '../../context/SiteContext'

export default function NewsletterForm() {
  const siteContext = useSiteContext();
  const { subscribe } = FooterContentFrom[siteContext.activeLanguage];
  
  return (
    <div className="newsletter-form">
      <h5 className="newsletter-form__title">{subscribe.title}</h5>
      <p className="newsletter-form__description">{subscribe.description}</p>
      <form className="newsletter-form__form" action="">
        <input type="email" placeholder={subscribe.emailInput.placeholder}/>
        <input type="submit" value={subscribe.submitButton.label}/>
      </form>
    </div>
  )
}
