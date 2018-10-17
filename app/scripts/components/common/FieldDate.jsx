import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'

import { translate } from './../../i18n/i18n'

export class FieldDate extends Component  {

  handleChange = (type, value) => {
    // TODO bad logic
    /*if (this.inputDay.input.value.length >= 2) {
      this.inputMonth.focus()
    }
    if (this.inputMonth.input.value.length >= 2) {
      this.inputYear.focus()
    }
    if (this.inputYear.input.value.length === 4) {
      this.inputYear.blur()
    }*/

    const day = this.inputDay.input.value
    const month = this.inputMonth.input.value
    const year = this.inputYear.input.value
    const formatted = `${year}-${month}-${day}`
    this.props.onChange(formatted)
  }

  render() {
    const { label, required, onBlur, value } = this.props
    const defaultDate = value || '--'
    const [yearValue, monthValue, dayValue] = defaultDate.split('-')

    return (
      <div className="field-date">
        <label>{translate(label)}</label>
        <div className="flex-row date-container">
          <div className="day">
            <Input
              min={1}
              max={31}
              ref={input => this.inputDay = input}
              placeholder="DD"
              onChange={e => this.handleChange('dd', e.target.value)}
              required={required}
              onBlur={onBlur}
              value={dayValue}
            />
          </div>
          <div className="month">
            <Input
              min={1}
              max={12}
              ref={input => this.inputMonth = input}
              placeholder="MM"
              onChange={e => this.handleChange('mm', e.target.value)}
              required={required}
              onBlur={onBlur}
              value={monthValue}
            />
          </div>
          <div className="year">
            <Input
              maxLength={4}
              ref={input => this.inputYear = input}
              placeholder="YYYY"
              onChange={e => this.handleChange('yy', e.target.value)}
              required={required}
              onBlur={onBlur}
              value={yearValue}
            />
          </div>
        </div>
      </div>
    )
  }
}

FieldDate.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  onBlur: PropTypes.func
}
