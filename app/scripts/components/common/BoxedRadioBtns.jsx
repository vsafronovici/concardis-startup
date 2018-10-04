import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Radio } from 'antd'
import { translate } from './../../i18n/i18n'
import { FieldType } from './../../utils/constants'

const RadioGroup = Radio.Group

const createRenderer = render => ({ input, meta, label, required, help, ...rest }) => (
  <div
    className={[
      meta.error && meta.touched ? 'error' : '',
      meta.active ? 'active' : ''
    ].join(' ')}
  >
    <label>
      <strong>{translate(label)}</strong> {required && <span className="require-symbol">*</span>}
    </label>
    { help &&
    <Tooltip placement="rightTop" trigger="click" title={translate(help)}>
      <Icon type="info-circle" style={{ fontSize: '0.8em', color: '#08c' }} />
    </Tooltip>
    }

    { render(input, meta, label, rest) }

    { meta.error && meta.touched && <span>{meta.error}</span> }
  </div>
)

const RenderRadio = props => {
  const { input, options, meta } = props

  const handleChange = (value) => {
    input.onChange(value)
  }

  return (
    <RadioGroup onChange={(value) => handleChange(value)}>
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




const BoxedRadioBtns = (props) => {
  const { input, options, name, type } = props
  return(
    <div>
      <Field name={name} component={RenderRadio} options={options} type={type} {...input}/>
    </div>
  )
}

export default reduxForm({
  form: 'radioGroupTest'
})(BoxedRadioBtns)