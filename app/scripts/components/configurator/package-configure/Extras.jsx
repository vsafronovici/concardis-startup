import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { InputNumber, Row, Col } from 'antd'

import { changeExtraQnty } from '../../../actions/package-configure-action'
import { extraFieldsSelector, extraFieldsTotalSelector } from '../../../selectors/package-configure-selector'
import { translate } from '../../../i18n/i18n'
import { generalFormatNumber } from './../../../utils/function-utils'
import { isInteger } from '../../../utils/regexps'

const MAX_VALUE = 10

const onChangeExtraQty = (action, { id, value }) => {
  if (isInteger(value) && (value <= MAX_VALUE)) {
    action({ id, value })
  } else if (isInteger(value) && (value > MAX_VALUE)) {
    action({ id, value: MAX_VALUE })
  }
}

const Extras = (props) => {
  const { extras, extraFields, extraFieldsTotal } = props
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
                          + {generalFormatNumber(item.price.value)} {item.price.currencySymbol}
                        </div>
                        <div className="ex-item-counter-subtitle">
                          ({translate('configurator.packagePage.OneOffCost')})
                        </div>
                      </div>
                      <div key={item.name}>
                        <InputNumber
                          min={0} max={MAX_VALUE} defaultValue={extraFields[item.quoteItemId]} value={extraFields[item.quoteItemId]}
                          onChange={value => onChangeExtraQty(props.changeExtraQnty, { id: item.quoteItemId, value })}
                        />
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
                {generalFormatNumber(extraFieldsTotal)} EUR
              </div>
            </Col>
          </div>
        </Row>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  extraFields: extraFieldsSelector(state),
  extraFieldsTotal: extraFieldsTotalSelector(state)
})

const mapDispatchToProps = ({
  changeExtraQnty
})

Extras.propTypes = {
  extraFields: PropTypes.object,
  extraFieldsTotal: PropTypes.number,
  extras: PropTypes.array,
  changeExtraQnty: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Extras)
