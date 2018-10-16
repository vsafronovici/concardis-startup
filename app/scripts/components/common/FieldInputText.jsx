import React from 'react'
import { Input } from 'antd'
import PropTypes from 'prop-types'
import { translate } from '../../i18n/i18n'
import { propOrEmptyObj } from '../../utils/function-utils'
import { FieldTooltip } from './FieldTooltip'

export class FieldInputText extends React.Component {
  render() {

    const { value, help, label, onChange, optional, disabled, autoFocus, hint, helpText, description } = this.props
    const input = propOrEmptyObj('input', this.props)

    return (
      <div className="field-input-text">
        <label>
          <div style={{ display:'flex', direction:'row' }}><strong>{translate(label)}</strong> { optional && <span> {'(optional)'}</span> } {helpText && <FieldTooltip title={helpText}/>}</div>
        </label>
        { help && <div className="form-help">{translate(help)}</div> }

        { description && <div className="description" >{translate(description)}</div> }
        <div className="container">
          <Input
            {...input}
            autoFocus={!!autoFocus}
            onChange={onChange}
            placeholder={hint && translate(hint)}
            value={value}
            disabled={disabled}
          />
        </div>
      </div>
    )
  }
}

FieldInputText.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  hint: PropTypes.string,
  helpText: PropTypes.string,
  description: PropTypes.string,
  help: PropTypes.string
}
