import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import moment from 'moment'
import { translate } from './../../i18n/i18n'
import { DATE_FORMAT } from '../../utils/constants'

export class FieldDate extends Component  {
  state = {
    dd: null,
    mm: null,
    yy: null
  }
  handleChange = (type, value) => {
    const newState = {
      ...this.state,
      [type]: value
    }
    this.setState(newState)
    if (this.inputDay.input.value.length >= 2) {
      this.inputMonth.focus()
    }
    if (this.inputMonth.input.value.length >= 2) {
      this.inputYear.focus()
    }
    if (this.inputYear.input.value.length === 4) {
      this.inputYear.blur()
    }
    const day = this.inputDay.input.value
    const month = this.inputMonth.input.value
    const year = this.inputYear.input.value
    const date = `${day}/${month}/${year}`
    const formatted = moment(date, 'DD/MM/YYYY').format(DATE_FORMAT)
    //console.log('formatted', formatted)
    this.props.onChange(formatted)
  }

  render() {
    const { label, required, onBlur, serverValues, name, value, input } = this.props
   // const value = '1312/02/04'
    console.log(' date_field ', { name: input.name, value, })
    const date = value && moment(value, DATE_FORMAT)
    const { dd, mm, yy } = this.state
    const dayValue = dd || date && date.format('DD')
    const monthValue = mm || date && date.format('MM')
    const yearValue = yy || date && date.format('YYYY')


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
