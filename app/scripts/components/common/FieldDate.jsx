import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import { translate } from './../../i18n/i18n'

export class FieldDate extends Component  {
  state = {
    dd: null,
    mm: null,
    yy: null
  }

  handleChange = (type, value) => {
    this.setState({
      ...this.state,
      [type]: value
    })
    if (this.inputDay.input.value.length >= 2) {
      this.inputMounth.focus()
    }
    if (this.inputMounth.input.value.length >= 2) {
      this.inputYear.focus()
    }
    if (this.inputYear.input.value.length === 4) {
      this.inputYear.blur()
    }
    const date = `${this.state.dd}/${this.state.mm}/${this.state.yy}`
    this.props.onChange(date)
  }

  render() {
    const { label } = this.props
    return (
      <div className="field-date">
        <label>{translate(label)}</label>
        <div className="flex-row date-container">
          <div className="day">
            <Input min={1} max={31} ref={input => this.inputDay = input} placeholder="DD" onChange={e => this.handleChange('dd', e.target.value)} id="dd"/>
          </div>
          <div className="mounth">
            <Input min={1} max={12} ref={input => this.inputMounth = input} placeholder="MM" onChange={e => this.handleChange('mm', e.target.value)} id="mm"/>
          </div>
          <div className="year">
            <Input maxLength={4} ref={input => this.inputYear = input} placeholder="YY" onChange={e => this.handleChange('yy', e.target.value)} id="yy"/>
          </div>
        </div>
      </div>
    )
  }
}

