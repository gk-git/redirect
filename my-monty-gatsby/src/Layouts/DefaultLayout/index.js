import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RotatingCompass from '../../components/RotatingCompass'

export default function DefaultLayout ({ children, baseUrl,  activeLanguage, activeRegionSlug }) {
  
  return (
    <>
      <RotatingCompass/>
      <Header baseUrl={baseUrl} activeLanguage={activeLanguage} activeRegionSlug={activeRegionSlug}/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}
