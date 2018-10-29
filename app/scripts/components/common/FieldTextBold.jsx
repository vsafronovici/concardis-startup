import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import { translate } from './../../i18n/i18n'
import { FieldTooltip } from './FieldTooltip'
import { getNotRequired } from '../../utils/application-form-utils'

export class FieldTextBold extends Component {
  state = {
    bold: true
  }

  handleChange = value => {
    if (value.length > 12) {
      this.setState({
        bold: false
      })
    } else {
      this.setState({
        bold: true
      })
    }
    this.props.onChange(value)
  }

  render() {
    const { label, helpText, value, hint, description, onBlur, validationRules } = this.props
    return (
      <div className="field-text-bold">
        <div className="container-labels">
          <label>{label}</label> {getNotRequired(validationRules) && <span>{translate('(optional)')}</span>} {helpText && <div><FieldTooltip title={helpText} /></div>}
        </div>
        <div className="help">
          {description && translate(description)}
        </div>
        <div className="field">
          <label data-b={this.state.bold ? 'B' : ''}>
            <Input
              style={this.state.bold ? { fontWeight: '800' } : { fontWeight: 'normal' }}
              value={value}
              placholder={hint && translate(hint)}
              onBlur={onBlur}
              onChange={event => this.handleChange(event.target.value)}
            />
          </label>
        </div>
      </div>
    )
  }
}

FieldTextBold.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  helpText: PropTypes.string,
  value: PropTypes.any,
  hint: PropTypes.string,
  description: PropTypes.string,
  onBlur: PropTypes.func,
  validationRules: PropTypes.array
}
