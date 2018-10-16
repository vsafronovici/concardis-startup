import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import { translate } from './../../i18n/i18n'
import { FieldTooltip } from './FieldTooltip'

export class FieldTextBold extends Component{

  state = {
    bold: true
  }

  handleChange = value => {
    if(value.length > 12) {
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
    const { label, onChange, helpText, placeholder, value, hint, description } = this.props

    return (
      <div className="field-text-bold">
        <div className="container-labels">
          <label>{label}</label> {helpText && <div><FieldTooltip title={helpText}/></div>}
        </div>
        <div className="help">
          {description && translate(description)}
        </div>
        <div className="field">
          <label data-b={this.state.bold ? "B" : ''}>
            <Input
              style={this.state.bold ? {fontWeight: '800'} : {fontWeight: 'normal'}}
              value={value}
              placholder={hint}
              maxLength={24}
              onChange={event => this.handleChange(event.target.value)}
            />
          </label>
        </div>
      </div>
    )
  }
}
