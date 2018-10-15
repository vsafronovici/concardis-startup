import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import { translate } from './../../i18n/i18n'
import { FieldTooltip } from './FieldTooltip'

export class FieldTextBold extends Component{



  //const regular = checkBold(this.inputBold.value) ? {fontWeight: '300'} : {fontWeight: '800'}
  render() {
    const { label, onChange, helpText, placeholder, value, hint, description } = this.props
    console.log('BOLD INPUT', this.refs)
    return (
      <div className="field-text-bold">
        <div className="container-labels">
          <label>{label}</label> {helpText && <div><FieldTooltip title={helpText}/></div>}
        </div>
        <div className="help">
          {description && translate(description)}
        </div>
        <div className="field">
          <label data-b="B">
            <Input
              //style={regular}
              value={value}
              placholder={hint}
              onChange={event => onChange(event)}
              ref={input => this.inputBold = input}
            />
          </label>
        </div>
      </div>
    )
  }
}
