import React from 'react'
import { Input } from 'antd'
import { translate } from '../../i18n/i18n'
import { propOrEmptyObj } from '../../utils/function-utils'
import { FieldTooltip } from './FieldTooltip'

export class FieldInputText extends React.Component {
  render() {
    console.log('FieldInputText', this.props)
    const { value, placeholder, tooltip, help, label, onChange, optional, disabled, autoFocus, hint,helpText, description } = this.props
    const input = propOrEmptyObj('input', this.props)

    return (
      <div className="field-input-text">
        <label>
          <div style={{display:'flex', direction:'row'}}><strong>{translate(label)}</strong> { optional && <span> {'(optional)'}</span> } {helpText && <FieldTooltip title={helpText}/>}</div>
        </label>
        { help && <div className="form-help">{translate(help)}</div> }

        {description && <div className="description" >{translate(description)}</div>}
        <div className="container">
          <Input
            {...input}
            autoFocus={!!autoFocus}
            onChange={onChange}
            placeholder={hint ? translate(hint) : ''}
            value={value}
            disabled={disabled}
          />
          { tooltip && <FieldTooltip title={tooltip} /> }
        </div>
      </div>
    )


  }
}
