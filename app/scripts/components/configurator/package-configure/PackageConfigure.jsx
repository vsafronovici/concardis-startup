import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import { OptionCard } from '../OptionCard2'
import { selectedProductSelector } from '../../../selectors/configurator-selector'
import EditQuote from './EditQuote'
import Extras from './Extras'
import PackageFooter from './PackageFooter'

class PackageConfigure extends Component {
  render() {
    const { quote } = this.props
    return (
      <div className="package-configure">
        <Row type="flex" justify="center">
          <Col span={9} offset={1}>
            <OptionCard quote={quote} />
          </Col>
          <Col span={12} offset={1}>
            <EditQuote quote={quote} />
            <Extras extras={quote.extraItems} />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={22} offset={1}>
            <PackageFooter quote={quote}/>
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
