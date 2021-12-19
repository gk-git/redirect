import React from 'react'
import TextWithColor from '../../components/TextWithColor'
import Data from '../../content/pl.json'
import DefaultLayout from '../../Layouts/DefaultLayout'

export default function AboutPage () {
  
  return (
    <DefaultLayout baseUrl={'pl-uk'} languages={Data.languages} activeLanguage="pl" activeRegionSlug="uk">
      <TextWithColor/>
    </DefaultLayout>
  )
}
