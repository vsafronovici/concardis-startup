import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import { translate } from './../../../i18n/i18n'
import { OptionCard } from '../OptionCard2'
import { selectedProductSelector } from '../../../selectors/configurator-selector'

export default class EditQuote extends Component {
  render() {
    const { quote: { unitPrice, totalPriceBeforeDiscount} } = this.props
    return (
      <div className="eq-wrapper">
        <div className="eq-container-top">
          <Row>
            <Col span={12}>
              <div className="eq-top-title">
                {translate('configurator.packagePage.costPerPackage')}
              </div>
              <div className="eq-top-subtitle">
                {translate('configurator.packagePage.perMonth')}
              </div>
            </Col>
            <Col span={12}>
              <div className="eq-top-price">
                {unitPrice.valuePerMonth} {unitPrice.currencySymbol}
              </div>
            </Col>
          </Row>
        </div>
        <div className="eq-container-content">
          <Row>
            <Col span={24}>
              <div className="eq-content-title">
                {translate('configurator.packagePage.packageQuantity')}
              </div>
              <div className="eq-content-subtitle">
                {translate('configurator.packagePage.packageQuantity.help')}
              </div>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={12}>
                  <div className="eq-flex-container">
                    <div className="eq-content-pq">
                      {translate('configurator.packagePage.packageQuantity.abreviated')}
                    </div>
                    <div className="eq-content-numbers">
                      "NUMBERS"
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="eq-content-total">
                    {translate('configurator.packagePage.TotalPackageCostPerMonth')}
                  </div>
                  <div className="eq-content-price">
                    {totalPriceBeforeDiscount.valuePerMonth} {totalPriceBeforeDiscount.currencySymbol}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
