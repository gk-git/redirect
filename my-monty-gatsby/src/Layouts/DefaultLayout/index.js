import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RotatingCompass from '../../components/RotatingCompass'
import { SiteContextProvider } from '../../context/SiteContext'

export default function DefaultLayout ({ children, baseUrl,  activeLanguage, activeRegionSlug }) {
  
  return (
    <>
      <SiteContextProvider baseUrl={baseUrl} activeLanguage={activeLanguage} activeRegionSlug={activeRegionSlug}>
        <RotatingCompass/>
        <Header />
        <main>
          {children}
        </main>
        <Footer/>
      </SiteContextProvider>
    </>
  )
}
