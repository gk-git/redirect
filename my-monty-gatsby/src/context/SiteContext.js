import React, { createContext, useContext, useState } from 'react'

const defaultSiteContextData = {
  baseUrl: '',
  activeLanguage: '',
  activeRegionSlug: '',
}
const SiteContext = createContext(defaultSiteContextData)

export function useSiteContext () {
  return useContext(SiteContext)
}

export function SiteContextProvider ({ children, baseUrl, activeLanguage, activeRegionSlug }) {
  const [siteContext, setSiteContext] = useState({
    baseUrl: baseUrl,
    activeLanguage: activeLanguage,
    activeRegionSlug: activeRegionSlug,
  })
  
  return (
    <SiteContext.Provider
      value={{
        ...siteContext,
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}
