import React from 'react'

import "./index.scss"
import { IntegrityIcon } from '../SVG/Icons'
export default function IconsList ({ title, items = [], columns = 2 }) {
  return (
    <div className="icons-list">
      <div className="icons-list__title">{title}</div>
      <div className="icons-list__items" style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}>
        {
          items.map(item => {
            return (
              item
            )
          })
        }
      </div>
    </div>
  )
}

export function IconItem({icon, children}) {
  return (
    <div className="icons-list__item">{icon} <span style={{marginRight: '0.5em', display: 'inline-block'}}>{children}</span></div>
  )
}
