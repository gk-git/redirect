import React from 'react'

import "./Input.scss"
export default function SiteInput ({ className, label, type = 'text', name, id }) {
  return (
    <>
      <div className="site-input">
        <label className="site-input__label" htmlFor={id}>{label}</label>
        {
          type === 'textarea' ? (
            <textarea
              className="site-input__textarea"
              name={name}
              id={id}
              rows={8}
            />
          ) : (
            <input className="site-input__input" name={name} type={type} id={id}/>
          )
        }
      </div>
    </>
  )
}
