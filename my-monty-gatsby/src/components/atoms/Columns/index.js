import React from 'react'

export default function SiteColumns ({ children, columns, containerTag = 'div' }) {
  const CustomTag = `${containerTag}`
  return (
    <CustomTag className="site-columns" style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gridColumnGap: '0.5em',
      gridRowGap: '0.75em',
    }}>
      {children}
    </CustomTag>
  )
}
