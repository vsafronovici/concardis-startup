import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'

import { translate } from './../../i18n/i18n'
import { getNotRequired } from '../../utils/application-form-utils'
import { Optional } from './Optional'

const DD = 'dd'
const MM = 'mm'
const YY = 'yy'

export class FieldDate extends Component  {

  handleChange = type => e => {
    const value = e.target.value

    switch (type) {
      case DD: {
        if (value.length >= 2) {
          this.inputMonth.focus()
        }
        break
      }
      case MM: {
        if (value.length >= 2) {
          this.inputYear.focus()
        }
        break
      }
      default:
        // do nothing
    }

    const day = this.inputDay.input.value
    const month = this.inputMonth.input.value
    const year = this.inputYear.input.value
    const formatted = `${year}-${month}-${day}`
    this.props.onChange(formatted)
  }

  render() {
    const { label, required, onBlur, value, validationRules } = this.props
    const defaultDate = value || '--'
    const [yearValue, monthValue, dayValue] = defaultDate.split('-')

    return (
      <div className="field-date">
        <label>{translate(label)}</label>{getNotRequired(validationRules) && <Optional />}
        <div className="flex-row date-container">
          <div className="day">
            <Input
              min={1}
              max={31}
              ref={input => this.inputDay = input}
              placeholder="DD"
              onChange={this.handleChange(DD)}
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
              onChange={this.handleChange(MM)}
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
              onChange={this.handleChange(YY)}
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
