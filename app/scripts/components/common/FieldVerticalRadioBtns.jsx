import React from 'react'
import { Radio } from 'antd'
import { translate } from '../../i18n/i18n'
import { propOrEmptyObj } from '../../utils/function-utils'
import {FieldTooltip, FieldToolTip} from './FieldTooltip'

const RadioGroup = Radio.Group

export const FieldVerticalRadioBtns = props => {
  const { name, optional, placeholder, help, value, onChange, label, tooltip, options } = props
  const input = propOrEmptyObj('input', this.props)
  const radioStyle = {
    display: 'block',
    marginRight: '15px',
    marginBottom: '15px'
  }
  console.log('Vertical', props)
  return(
    <div className="vrb">
      <div className="vrb-title-container">
        <div className="vrb-title">
          {translate(label)}
        </div>
        <div>
          {tooltip && <FieldTooltip title={tooltip} />}
        </div>
      </div>
      {/*{help && <div>{translate(help)}</div>}*/}
      <RadioGroup onChange={(value) => onChange(value)}>
        {options.map((radio, index) => (
          <div className="vrb-bottom-container"  key={index}>
            <Radio value={radio.value} style={radioStyle} />
            <div className="vrb-bottom-label">{translate(radio.label)}</div>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
