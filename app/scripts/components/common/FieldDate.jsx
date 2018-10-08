import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'

export class FieldDate extends Component  {
  state = {
    dd: null,
    mm: null,
    yy: null
  }

  handleChange = (type, val) => {
    this.setState({
      ...this.state,
      type: val
    })
    const date = `${this.state.dd}/${this.state.mm}/${this.state.yy}`
    console.log(date)
    this.props.onChange(date)
  }

  render() {
    const {  } = this.props
    return (
      <div className="flex-row">
        <div className="day">
          <Input min={1} max={31}  placeholder="DD" onChange={event => this.handleChange(event)}/>
        </div>

        <div className="mounth">
          <Input min={1} max={12}  placeholder="MM" onChange={event => this.handleChange(event)}/>
        </div>
        <div className="mounth">
          <Input min={1} max={12}  placeholder="YY" onChange={event => this.handleChange(event)}/>
        </div>
      </div>
    )
  }
}

