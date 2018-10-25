import React from 'react'
import { Radio } from 'antd'
import PropTypes from 'prop-types'
import { translate } from '../../i18n/i18n'
import { propOrEmptyObj } from '../../utils/function-utils'
import { FieldTooltip } from './FieldTooltip'
import { getNotRequired } from '../../utils/application-form-utils'
import { Optional } from './Optional'

const RadioGroup = Radio.Group

const radioStyle = {
  display: 'block',
  marginRight: '15px',
  marginBottom: '15px'
}

export const FieldVerticalRadioBtns = props => {
  const { value, onChange, label, listOfValues, autoFocus, required, helpText, onFocus, validationRules, meta } = props
  console.log('VERTICAL', props)
  return(
    <div className="field-vertical-radio">
      <div className="label-container">
        <label>
          {translate(label)} {getNotRequired(validationRules) && <Optional />}
        </label>
        <div>
          {helpText && <FieldTooltip title={helpText} />}
        </div>
      </div>
      <RadioGroup onChange={(value) => onChange(value)} value={value} required={required}>
        {listOfValues.map(({ value, label, ...rest }, index) => (
          <div className="bottom-container" key={index}>
            <Radio
              className="radio-required"
              value={value}
              style={radioStyle}
              autoFocus={index === 0 && autoFocus}
              onFocus={onFocus}
              {...rest}
            />
            <div className="bottom-label">{translate(label)}</div>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

FieldVerticalRadioBtns.propTypes = {
  optional: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
  label: PropTypes.string,
  listOfValues: PropTypes.array,
  autoFocus: PropTypes.func,
  required: PropTypes.bool,
  helpText: PropTypes.string,
  onFocus: PropTypes.func
}
