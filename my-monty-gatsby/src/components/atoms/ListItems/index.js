import React from 'react'

import "./index.scss"
export default function ListItems({items}) {
  return (
    <ul className="list">
      {
        items.map(item => {
          return <li className="list__item">{item}</li>
        })
      }
    </ul>
  )
}
