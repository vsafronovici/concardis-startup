import React from 'react'
import { Input } from 'antd'
import { translate } from '../../i18n/i18n'
import { propOrEmptyObj } from '../../utils/function-utils'
import { FieldTooltip } from './FieldTooltip'

export class FieldInputText extends React.Component {
  render() {
    const { value, placeholder, tooltip, help, label, onChange, optional, disabled } = this.props
    const input = propOrEmptyObj('input', this.props)

    return (
      <div className="field-input-text">
        <label>
          <strong>{translate(label)}</strong> { optional && <span> {'(optional)'}</span> }
        </label>
        { help && <div className="form-help">{translate(help)}</div> }
        <div className="container">
          <Input
            {...input}
            onChange={onChange}
            placeholder={placeholder ? translate(placeholder) : ''}
            value={value}
            disabled={disabled}
          />
          { tooltip && <FieldTooltip title={tooltip} /> }
        </div>
      </div>
    )


  }
}
