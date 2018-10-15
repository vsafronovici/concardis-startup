import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import { translate } from './../../i18n/i18n'
import { checkDate} from "../../utils/function-utils";

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
      this.inputMounth.focus()
    }
    if (this.inputMounth.input.value.length >= 2) {
      this.inputYear.focus()
    }
    if (this.inputYear.input.value.length === 4) {
      this.inputYear.blur()
    }
    const DAY = this.inputDay.input.value
    const MOUNTH = this.inputMounth.input.value
    const YEAR = this.inputYear.input.value
    const DATE = `${DAY}/${MOUNTH}/${YEAR}`

    this.props.onChange(DATE)
}

  render() {
    const { label, required, meta } = this.props
    //console.log('DATEPROPS', this.props)
    return (
      <div className="field-date">
        <label>{translate(label)}</label>
        <div className="flex-row date-container">
          <div className="day">
            <Input min={1} max={31} ref={input => this.inputDay = input} placeholder="DD" onChange={e => this.handleChange('dd', e.target.value)} id="dd" required={required} />
          </div>
          <div className="mounth">
            <Input min={1} max={12} ref={input => this.inputMounth = input} placeholder="MM" onChange={e => this.handleChange('mm', e.target.value)} id="mm" required={required} />
          </div>
          <div className="year">
            <Input maxLength={4} ref={input => this.inputYear = input} placeholder="YY" onChange={e => this.handleChange('yy', e.target.value)} id="yy" required={required} />
          </div>
        </div>
      </div>
    )
  }
}

