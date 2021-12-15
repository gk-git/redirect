import React from 'react';
import "./index.scss"
export default function SiteButton({children, className='', ...rest}) {
  return (
    <button {...rest} className={`site-button ${className}`} >
      {children}
    </button>
  )
}
