import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import { OptionCard } from '../OptionCard2'
import { selectedProductSelector } from '../../../selectors/configurator-selector'
import EditQuote from './EditQuote'
import Extras from './Extras'

class PackageConfigure extends Component {
  render() {
    const { quote } = this.props
    return (
      <div className="package-configure">
        <Row type="flex" justify="center">
          <Col span={10}>
            <OptionCard quote={quote} />
          </Col>
          <Col span={14}>
            <EditQuote quote={quote} />
            <Extras quote={quote} />
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedProduct: selectedProductSelector(state)
})

export default connect(mapStateToProps)(PackageConfigure)
