import React from 'react'
import PropTypes from 'prop-types'
import { Radio } from 'antd'
import { translate } from './../../i18n/i18n'

const RadioGroup = Radio.Group

export const FieldBoxedRadioBtns = (props) => {
  const { listOfValues, onChange, value, autoFocus, label, description } = props
  //console.log('FieldBoxedRadioBtns', props)

  return (
    <div className="field-boxed-radio-group">
      <div className="label">
        <label>
          {label && translate(label)}
        </label>
      </div>
      <div className="description">
        {description && translate(description)}
      </div>
      <RadioGroup onChange={(value) => onChange(value)} value={value}>
        {listOfValues && listOfValues.map((radio, index) => (
          <div className="radio-container"  key={index}>
            <div className="container-titles">
              <label>
                {translate(radio.label)}
              </label>
              <div className="radio-label2">
                {translate(radio.description)}
              </div>
            </div>
            <div className="radio-container-field">
              <div className="radio-input">
                <Radio value={radio.value} autoFocus={index === 0 && autoFocus}/>
              </div>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
    )
  }

