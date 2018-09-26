import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, InputNumber, Button, Input } from 'antd'
import { translate } from './../../../i18n/i18n'
import { OptionCard } from '../OptionCard2'
import { selectedProductSelector } from '../../../selectors/configurator-selector'

export default class EditQuote extends Component {
  render() {
    const { quote: { unitPrice, totalPriceBeforeDiscount, totalPriceWithDiscount} } = this.props
    return (
      <div className="eq-container">
        <div className="eq-name">
          {translate('configurator.packagePage.perMonthCost')}
        </div>
        <div className="eq-wrapper">
          <div className="eq-container-top">
            <Row>
              <Col span={14}>
                <div className="eq-top-title">
                  {translate('configurator.packagePage.costPerPackage')}
                </div>
                <div className="eq-top-subtitle">
                  {translate('configurator.packagePage.perMonth')}
                </div>
              </Col>
              <Col span={10}>
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
                  <Col span={14}>
                    <div className="eq-flex-container">
                      <div className="eq-content-pq">
                        {translate('configurator.packagePage.packageQuantity.abreviated')}
                      </div>
                      <div className="eq-content-numbers">
                        <InputNumber />
                      </div>
                    </div>
                  </Col>
                  <Col span={10}>
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
          <div className='eq-container-bottom'>
            <Row>
              <Col span={24}>
                <div className="eq-bottom-title">
                  {translate('configurator.packagePage.field.Discount')}
                </div>
                <div className="eq-bottom-subtitle">
                  {translate('configurator.packagePage.field.Discount.help')}
                </div>
              </Col>
              <Col span={24}>
                <div className="eq-flex-container">
                  <div className="eq-bottom-input-disc">
                    <Input className="eq-bottom-input-item" placeholder={translate('configurator.packagePage.field.Discount.placeholder')}/>
                      
                  </div>
                  <div className="eq-bottom-button-disc">
                    <Button className="">
                      {translate('btn.applyDiscount')}
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="eq-wrapper-total-bottom">
              <Row>
                <Col span={14}>
                  <div className="eq-total-cost">
                    {translate('configurator.packagePage.TotalCostPerMonth')}
                  </div>
                </Col>
                <Col span={10}>
                  <div className="eq-total-price">
                    {totalPriceWithDiscount.valuePerMonth} {totalPriceWithDiscount.currencySymbol}
                  </div>
                </Col>
              </Row>
            </div>
              <div className="eq-features-container">
                <Row>
                  <Col span={24}>
                    <div className="eq-total-cost-features">
                      {translate('configurator.packagePage.TotalCostPerMonth.features')}
                    </div>
                  </Col>
                </Row>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
