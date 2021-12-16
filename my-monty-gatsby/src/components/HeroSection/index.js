import React from 'react'
import GlobalImage from '../../assets/images/hero/global.webp'
import './index.scss'

export default function HeroSection ({ title, text, backgroundImage = GlobalImage }) {
  return (
    <section id="hero-section" className="hero__section">
      <div className="hero__img-container" style={{ backgroundImage: `URL(${backgroundImage})` }}>
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
