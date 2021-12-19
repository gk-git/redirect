import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import RegionsData from '../../content/regions.json'
import { useSiteContext } from '../../context/SiteContext'
import useWindowWidth from '../../hooks/useWindowWidth'
import SiteButton from '../atoms/Button/Button'
import MenuToggleIcon from '../atoms/MenuToggleIcon'
import CountryImage from '../CountryImage'
import ArrowDown from '../SVG/ArrowDown'
import Logo from '../SVG/Logo'

import './index.scss'

const Header = () => {
  const [state, setState] = useState({
    isMobile: true,
    isMenuOpen: false,
    isRegionsDropdownOpen: false,
    isLanguagesDropdownOpen: false,
  })
  const windowWidth = useWindowWidth()
  
  const siteContext = useSiteContext()
  useEffect(() => {
    if (windowWidth !== false && windowWidth > 1200) {
      if (state.isMobile === true) {
        setState({
          ...state,
          isMobile: false,
        })
      }
      console.log('windowWidth', {
        isMobile: false,
        windowWidth,
      })
  
    } else {
      if (state.isMobile === false) {
        setState({
          ...state,
          isMobile: true,
        })
        console.log('windowWidth', {
          isMobile: true,
          windowWidth,
        })
      }
    }
  }, [windowWidth])
  const handleMenuIconClick = () => {
    setState({
      ...state,
      isMenuOpen: !state.isMenuOpen,
    })
  }
  
  const toggleRegionsDropdown = () => {
    console.log('trigger')
    setState({
      ...state,
      isRegionsDropdownOpen: !state.isRegionsDropdownOpen,
    })
  }
  const toggleLanguagesDropdown = () => {
    setState({
      ...state,
      isLanguagesDropdownOpen: !state.isLanguagesDropdownOpen,
    })
  }
  
  const getActiveRegion = () => {
    return RegionsData.regions.find(region => region.slug === siteContext.activeRegionSlug)
  }
  const getRegionsWithoutActive = () => {
    return RegionsData.regions.filter(region => region.slug !== siteContext.activeRegionSlug)
  }
  const activeRegion = getActiveRegion()
  const nonActiveRegions = getRegionsWithoutActive()
  
  const languages = activeRegion.languages
  
  const handleLanguageChange = (language) => {
    const cookies = new Cookies()
    cookies.set('lang', language, { path: '/', expires: new Date(Date.now() + 2592000) })
    console.log(cookies.get('lang')) // Pacman
    
  }
  
  function renderMenuSection () {
    return (
      <>
  
        <ul className="desktop-nav__tabs">
          <li>
            <Link to={`/${siteContext.baseUrl}/about`} activeClassName="active">Company</Link>
          </li>
          <li><Link to={`/${siteContext.baseUrl}/about`} activeClassName="active">Features</Link></li>
          <li><Link to={`/${siteContext.baseUrl}/about`} activeClassName="active">Plans</Link></li>
          <li><Link to={`/${siteContext.baseUrl}/about`} activeClassName="active">Help</Link></li>
          <div className="menu-pointer"/>
        </ul>
        <div className="desktop-nav__right">
          <div className="languages-toggle" onClick={toggleLanguagesDropdown}>
            <svg aria-hidden="true" data-prefix="fas" data-icon="chevron-down"
                 className="svg-inline--fa fa-chevron-down fa-w-14" role="img" width="10" viewBox="0 0 448 512">
              <path
                d="M207.029 381.476 12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
            </svg>
            <div className="selected-language">
              <CountryImage name={siteContext.activeLanguage}/>
            </div>
            <div className={`languages ${state.isLanguagesDropdownOpen ? 'open' : ''}`}>
              <div className="languages-wrapper">
                <ul className="languages-wrapper__list">
                  {
                    languages.filter(language => {
                        return language.slug !== siteContext.activeLanguage
                      })
                      .concat(languages.filter(language => language.slug === siteContext.activeLanguage))
                      .map((language, index) => {
                        return (
                          <li key={index} className="languages-wrapper__list-language">
                            <Link to={`/${language.slug}-${siteContext.activeRegionSlug}`} onClick={() => {
                              handleLanguageChange(language.slug)
                            }}>
                              <CountryImage name={language.slug}/>
                              <span>{language.name}</span>
                            </Link>
                          </li>
                        )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="cta-button">
            <SiteButton>
              Get MyMonty
            </SiteButton>
          </div>
        </div>
      </>
    )
  }
  
  return (
    <header className="header" id="header">
      <div className="header__container">
        <div className={`desktop-nav ${state.isMenuOpen ? ' open ' : ''}`}>
          <div className="desktop-nav__logo">
            <Link to={`/${siteContext.baseUrl}/`}>
              <Logo/>
            </Link>
            <div className="arrow-icon" onClick={toggleRegionsDropdown}>
              <ArrowDown/>
            </div>
            <div className="selected-location">{activeRegion.name}</div>
            <div className={`locations ${state.isRegionsDropdownOpen ? 'open' : ''}`}>
              <div className="locations-wrapper">
                <ul className="locations-wrapper__list">
                  {
                    nonActiveRegions.map((region, index) => {
                      const defaultLanguage = region.languages.find(language => language.isDefault)
                      if (region.isGlobal) {
                        return (
                          <li key={index} className="locations-wrapper__list-location"><Link
                            to={`/${defaultLanguage.slug}-${region.slug}`}> Global</Link>
                          </li>
                        )
                      }
                      return (
                        <li key={index} className="locations-wrapper__list-location"><Link
                          to={`/${defaultLanguage.slug}-${region.slug}`}> <span
                          className="fw-bolder">My</span>{region.name}</Link>
                        </li>
                      )
                    })
                  }


                </ul>
              </div>
            </div>
          </div>
          <div className="icon-wrapper" onClick={handleMenuIconClick}>
            <MenuToggleIcon/>
          </div>
          {
            state.isMobile ? (
              <div className="mobile-menu-wrapper">
                {
                  renderMenuSection()
                }
              </div>
            ) : renderMenuSection()
          }
        </div>
      </div>
    </header>
  )
}

export default Header
