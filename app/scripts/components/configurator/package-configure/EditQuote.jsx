import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, InputNumber, Button, Input } from 'antd'
import cn from 'classnames'

import { translate } from './../../../i18n/i18n'
import {
  applyDiscountSelector,
  discountCodeSelector, quantitySelector,
  totalPriceWithDiscountSelector
} from '../../../selectors/package-configure-selector'
import { changePackageQnty, changeDiscountCode, applyDiscount } from '../../../actions/package-configure-action'
import { format, generalFormatNumber } from '../../../utils/function-utils'
import { RESPONSE_STATUS_CODE } from '../../../utils/constants'


const calculateTotalPackageCost = (unitPrice, quantity) => generalFormatNumber(unitPrice * quantity)

class EditQuote extends Component {

  onChangeQty = value => {
    this.props.changePackageQnty({ qty: value })
  }

  render() {
    const { quote: { unitPrice, totalPriceBeforeDiscount}, quantity, discountCode, totalPriceWithDiscount, applyDiscountStatus } = this.props
    const { code: applyDiscountCode, message: applyDiscountMsg } = applyDiscountStatus

    console.log('EditQuote', {props: this.props, applyDiscountCode, applyDiscountMsg})

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
                  {generalFormatNumber(unitPrice.valuePerMonth)} {unitPrice.currencySymbol}
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
                        <InputNumber min={1} max={10} defaultValue={quantity} onChange={value => this.onChangeQty(value)}/>
                      </div>
                    </div>
                  </Col>
                  <Col span={10}>
                    <div className="eq-content-total">
                      {translate('configurator.packagePage.TotalPackageCostPerMonth')}
                    </div>
                    <div className="eq-content-price">
                      {calculateTotalPackageCost(unitPrice.valuePerMonth, quantity)} {totalPriceBeforeDiscount.currencySymbol}
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
                <div className="eq-flex-container form-field">
                  <div className={cn('eq-bottom-input-disc', { error: applyDiscountCode && applyDiscountCode !== RESPONSE_STATUS_CODE.OK })}>
                    <Input
                      className="eq-bottom-input-item"
                      placeholder={translate('configurator.packagePage.field.Discount.placeholder')}
                      value={discountCode}
                      onChange={e => this.props.changeDiscountCode(e.target.value)}
                    />
                    <div>{applyDiscountMsg}</div>
                  </div>
                  <div className="eq-bottom-button-disc">
                    <Button onClick={() => this.props.applyDiscount()}>
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
                    {generalFormatNumber(totalPriceWithDiscount.valuePerMonth)} {totalPriceWithDiscount.currencySymbol}
                  </div>
                </Col>
              </Row>
            </div>
              <div className="eq-features-container">
                <Row>
                  <Col span={24}>
                    <div className="eq-total-cost-features">
                      {format(translate('configurator.packagePage.TotalCostPerMonth.feature'), 1, '0x', 12)}
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

const mapStateToProps = state => ({
  quantity: quantitySelector(state),
  discountCode: discountCodeSelector(state),
  totalPriceWithDiscount: totalPriceWithDiscountSelector(state),
  applyDiscountStatus: applyDiscountSelector(state)
})

const mapDispatchToProps = ({
  changePackageQnty,
  changeDiscountCode,
  applyDiscount
})

export default connect(mapStateToProps, mapDispatchToProps)(EditQuote)

