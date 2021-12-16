import React from 'react';
import TextWithColor from '../../components/TextWithColor'
import DefaultLayout from '../../Layouts/DefaultLayout'
import Data from '../../content/pl.json';

export default function AboutPage(){
  
  return (
    <DefaultLayout baseUrl={'it-eu'} languages={Data.languages} activeLanguage="italy" activeRegionSlug="eu">
      <TextWithColor/>
    </DefaultLayout>
  )
}
