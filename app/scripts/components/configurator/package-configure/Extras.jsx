import React, { Component } from 'react'
import { connect } from 'react-redux'
import { curry, pluck } from 'ramda'
import { InputNumber, Row, Col } from 'antd'

import { changeExtraQnty } from '../../../actions/package-configure-action'
import { extraFieldsSelector } from '../../../selectors/package-configure-selector'
import { translate } from '../../../i18n/i18n';

const onChangeQtyCurried = curry((action, fieldName, fieldValue) => {
  action({ [fieldName]: fieldValue })
})

const getExtraValues = array => {
  const values = pluck('price')(array)
  const prices = pluck('value')(values)
  console.log(prices)
}

const Extras = props => {
    console.log('Extras', props)
    const { extras, extraFields } = props
    const onChangeQty = onChangeQtyCurried(props.changeExtraQnty)
    return (
      <div className="ex-container">
        <div className="ex-name">
         {translate('configurator.packagePage.extras')}
        </div>
        <div className="ex-wrapper">
          <Row>
          { extras.map(item =>
            <Col span={24} key={item.name} className="ex-main-item">
              <div className="ex-container-item">
                <Row>
                  <Col span={14}>
                    <div className="ex-item-name">
                      {item.name}
                    </div>
                    <div className="ex-item-description">
                      {item.description}
                    </div>
                  </Col>
                  <Col span={10}>
                    <div className="ex-flex-container">
                      <div className="ex-item-counter-container">
                        <div className="ex-item-counter-price">
                          + {item.price.formattedValue}
                        </div>
                        <div className="ex-item-counter-subtitle">
                          ({translate('configurator.packagePage.OneOffCost')})
                        </div>
                      </div>
                      <div key={item.name}>
                        <InputNumber min={1} max={10} defaultValue={extraFields[item.quoteItemId]} onChange={value => onChangeQty(item.quoteItemId, value)} />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
        )}
          </Row>
          <Row>
            <div className="ex-wrapper-total-bottom">
              <Col span={14}>
                <div className="ex-total-cost">
                  {translate('configurator.packagePage.TotalOneOffCost')}
                </div>
              </Col>
              <Col span={10}>
                <div className="ex-total-price">
                  {getExtraValues(extras)}
                </div>
              </Col>
            </div>
          </Row>
        </div>
    </div>
    )
}

const mapStateToProps = state => ({
  extraFields: extraFieldsSelector(state)
})

const mapDispatchToProps = ({
  changeExtraQnty
})

export default connect(mapStateToProps, mapDispatchToProps)(Extras)
