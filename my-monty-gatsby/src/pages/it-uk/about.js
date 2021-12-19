import React from 'react'
import TextWithColor from '../../components/TextWithColor'
import Data from '../../content/pl.json'
import DefaultLayout from '../../Layouts/DefaultLayout'

export default function AboutPage () {
  
  return (
    <DefaultLayout baseUrl={'it-uk'} languages={Data.languages} activeLanguage="it" activeRegionSlug="uk">
      <TextWithColor/>
    </DefaultLayout>
  )
}
