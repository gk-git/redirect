import React from 'react'

import "./index.scss"
export default function HeroSection ({ title, text }) {
  return (
    <section id="hero-section" className="hero__section">
      <div className="hero__img-container">
        <img src="https://flagcdn.com/h120/pl.webp" alt="Hero Picture" className="hero__img-container__img"/>
        <p className="hero__img-container__title" dangerouslySetInnerHTML={{
          __html: title,
        }}/>
      </div>
      <div className="hero__title-container">
        <p className="hero__title" dangerouslySetInnerHTML={{
          __html: text,
        }}/>
        <p className="hero__title">
          <span className="hero__title__help">Help us</span>&#32;<span className="hero__title__make">make banking accessible for all</span>
        </p>
      </div>
    </section>
  )
}
