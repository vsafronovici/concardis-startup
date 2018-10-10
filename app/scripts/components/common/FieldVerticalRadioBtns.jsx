import React from 'react'
import { Radio } from 'antd'
import { translate } from '../../i18n/i18n'
import { propOrEmptyObj } from '../../utils/function-utils'
import { FieldTooltip } from './FieldTooltip'

const RadioGroup = Radio.Group

const radioStyle = {
  display: 'block',
  marginRight: '15px',
  marginBottom: '15px'
}

export const FieldVerticalRadioBtns = props => {
  const { name, optional, placeholder, help, value, onChange, label, tooltip, listOfValues, autoFocus, required } = props
  const input = propOrEmptyObj('input', this.props)

  return(
    <div className="field-vertical-radio">
      <div className="label-container">
        <label>
          {translate(label)} {optional && <span>{'(optional)'}</span>}
        </label>
        <div>
          {tooltip && <FieldTooltip title={tooltip} />}
        </div>
      </div>
      <RadioGroup onChange={(value) => onChange(value)} value={value} required={required}>
        {listOfValues.map((radio, index) => (
          <div className="bottom-container" key={index}>
            <Radio value={radio.value} style={radioStyle} autoFocus={index === 0 && autoFocus} />
            <div className="bottom-label">{translate(radio.label)}</div>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
