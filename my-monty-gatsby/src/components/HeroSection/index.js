import React from 'react'
import GlobalImage from '../../assets/images/hero/global.webp'
import './index.scss'

export default function HeroSection ({ title, mainText, subTitle={
  help: 'Help us',
  make: 'make banking accessible for all'
}, backgroundImage = GlobalImage }) {
  return (
    <section id="hero-section" className="hero__section">
      <div className="hero__img-container" style={{ backgroundImage: `URL(${backgroundImage})` }}>
        <p className="hero__img-container__title" dangerouslySetInnerHTML={{
          __html: title,
        }}/>
      </div>
      <div className="hero__title-container">
        <p className="hero__title" dangerouslySetInnerHTML={{
          __html: mainText,
        }}/>
        <p className="hero__title">
          <span className="hero__title__help">{subTitle.help}</span>&#32;<span className="hero__title__make">{subTitle.make}</span>
        </p>
      </div>
    </section>
  )
}
