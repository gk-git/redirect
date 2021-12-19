import React from 'react';
import "./index.scss"

export default function SiteButton({children, className='', size="sm", ...rest}) {
  return (
    <button {...rest} className={`site-button site-button--${size} ${className}`} >
      {children}
    </button>
  )
}
