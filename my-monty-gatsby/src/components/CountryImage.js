import React from 'react'
import FranceImage from '../assets/images/flags/france.png'
import ItalyImage from '../assets/images/flags/italy.png'
import PolandImage from '../assets/images/flags/poland.png'
import UnitedKingdomImage from '../assets/images/flags/english.png'

export default function CountryImage({name}){
  
  return (
    <>
      {
        name === 'france' ?  <img src={FranceImage} alt="France" width="25px"/>
          : (name === 'italy' ?  <img src={ItalyImage} alt="Italy" width="25px"/> :
            (name === 'poland' ? <img src={PolandImage} alt="Poland" width="25px"/>:
                <img src={UnitedKingdomImage} alt="English" width="25px"/>
            )
          )
      }
      </>
  )
}
