import React from 'react'
import FranceImage from '../assets/images/flags/france.png'
import ItalyImage from '../assets/images/flags/italy.png'
import PolandImage from '../assets/images/flags/poland.png'
import UnitedKingdomImage from '../assets/images/flags/english.png'

export default function CountryImage({name}){
  
  return (
    <>
      {
        name === 'fr' ?  <img src={FranceImage} alt="France" width="25px"/>
          : (name === 'it' ?  <img src={ItalyImage} alt="Italy" width="25px"/> :
            (name === 'pl' ? <img src={PolandImage} alt="Poland" width="25px"/>:
                <img src={UnitedKingdomImage} alt="English" width="25px"/>
            )
          )
      }
      </>
  )
}
