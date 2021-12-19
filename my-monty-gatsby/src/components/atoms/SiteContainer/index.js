import React from 'react'

import "./index.scss"
export default function SiteContainer({children}) {
  return (
    <div className="site-container">
      {children}
    </div>
  )
}
