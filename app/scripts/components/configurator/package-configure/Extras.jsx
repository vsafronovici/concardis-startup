import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import { OptionCard } from '../OptionCard2'
import { selectedProductSelector } from '../../../selectors/configurator-selector'

export default class Extras extends Component {
  render() {
    const { } = this.props
    return (
      <div className="">
        extras
      </div>
    )
  }
}
