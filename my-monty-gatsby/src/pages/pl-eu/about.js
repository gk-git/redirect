import React from 'react';
import TextWithColor from '../../components/TextWithColor'
import DefaultLayout from '../../Layouts/DefaultLayout'
import Data from '../../content/pl.json';

export default function AboutPage(){
  
  return (
    <DefaultLayout baseUrl={'pl-eu'} languages={Data.languages} activeLanguage="poland" activeRegionSlug="eu">
      <TextWithColor/>
    </DefaultLayout>
  )
}
