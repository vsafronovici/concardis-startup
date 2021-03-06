import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Modal } from 'antd'
import { OptionCard } from './OptionCard'
import ExtraOptions from './extraOptions/ExtraOptions'
import { initData3 } from '../../actions/configurator-action'
import { selectedProductSelector } from '../../selectors/configurator-selector'

class Step3 extends Component {
  render() {
    console.log('step3', this.props)
    const { selectedProduct: { prod, extras } } = this.props
    return (
      <div className="step3-container">
        <Row>
          <Col xl={{ span: '14', offset: '5' }}>
            <Row>
              <Col xl={{ span: '9', offset: '1' }}>
                <OptionCard
                  name={prod.name}
                  description={prod.description}
                  price={prod.price}
                  items={prod.items}
                  readonly
                />
              </Col>
              <Col xl={{ span: '11', offset: '1' }}>
                <ExtraOptions items={extras} price={prod.price} productId={prod.Id} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedProduct: selectedProductSelector(state)
})

export default connect(mapStateToProps)(Step3)
