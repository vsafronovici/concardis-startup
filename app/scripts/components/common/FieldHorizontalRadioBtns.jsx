import React from 'react'
import PropTypes from 'prop-types'
import { Radio } from 'antd'
import { translate } from '../../i18n/i18n'
import {FieldTooltip} from "./FieldTooltip";

const RadioGroup = Radio.Group

export const FieldHorizontalRadioBtns = props => {
  const { title, onChange, value, options, tooltip } = props
  return (
    <div className="field-horizontal-radio-btns">
      <div className="flex-row label">
        <label>{translate(title)}</label> {tooltip && <FieldTooltip tooltip={tooltip}/>}
      </div>
      <RadioGroup onChange={event => onChange(event)} value={value} className="flex-row">
        {options.map((radio, index) => {
          return (
            <Radio key={index} value={radio.value} className="item">
              {translate(radio.label)}
            </Radio>
          )
        })}
      </RadioGroup>
    </div>
  )
}
