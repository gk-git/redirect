import React from 'react'

import './index.scss'

export default function SiteBanner ({ children, inverted, backgroundColor = '#EAF3FC', imageAttributes }) {
  
  return (
    <div className={`site-banner ${inverted ? 'inverted' : ''}`} style={{ backgroundColor: backgroundColor }}>
      <div className="site-banner__content">
        {
          children
        }
      </div>
      <div className="site-banner__visual">
        <img style={imageAttributes.style} src={imageAttributes.imgSrc} alt=""/>
      </div>
    </div>
  )
}
SiteBanner.defaultProps = {
  imageAttributes: {
    style: {},
  },
  inverted: false,
}
