import React from 'react'
import { Radio } from 'antd'

const RadioGroup = Radio.Group

export const VerticalRadioBtns = props => {
  const { options, onChange, title, tooltip } = props
  const radioStyle = {
    display: 'block',
    marginRight: '15px',
    marginBottom: '15px'
  }
  return(
    <div className="vrb">
      <div className="vrb-title-container">
        <div className="vrb-title">
          {title}
        </div>
        {tooltip && <div className="vrb-tooltip">tooltip</div>}
      </div>
      <RadioGroup onChange={(value) => onChange(value)}>
        {options.map((radio, index) => (
          <Radio key={index} value={radio.value} style={radioStyle}>
            {radio.label}
          </Radio>
        ))}
      </RadioGroup>
    </div>
  )
}
