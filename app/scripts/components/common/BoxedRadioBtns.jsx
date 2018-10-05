import React from 'react'
import PropTypes from 'prop-types'
import { Radio } from 'antd'

const RadioGroup = Radio.Group

export const BoxedRadioGroup = ({ options, onChange }) => {

  return (
    <RadioGroup onChange={(value) => onChange(value)}>
      {options.map( (radio, index) => (
        <div className="bxd-radio-container"  key={index}>
          <div className="bxd-radio-label">
            {radio.label}
          </div>
          <div className="bxd-radio-bottom-container">
            <div className="bxd-radio-label2">
              {radio.label2} 
            </div>
            <div className="bxd-radio-input">
              <Radio value={radio.value} />
            </div>
          </div>
        </div>
      ))}
    </RadioGroup>
    )
  }

