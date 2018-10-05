import React from 'react'
import CheckBoxField from './CheckBoxField'

export const BoxedCheckbox = props => {
  const { title, description, onChange } = props
  return(
    <div className="bxd-checkbox">
      <div className="bxd-checkbox-container-titles">
        <div className="bxd-checkbox-title">
          {title}
        </div>
        <div className="bxd-checkbox-description">
          {description}
        </div>
      </div>
      <div className="bxd-checkbox-field">
        <CheckBoxField onChange={onChange} />
      </div>
    </div>
  )
}
