import React, { Component } from 'react'
import { Button, Modal } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getFormValues, reduxForm } from 'redux-form'
import { keys, pipe, filter, join, isEmpty, not } from 'ramda'

import { ExtraField } from './extraField/ExtraField'
import { DiscountField, DISCOUNT, Validator, AsyncValidator } from './DiscountField'
import { changeFieldValue, recalculateQuote, validateDiscountCode } from '../../../actions/configurator-action'
import { ConfiguratorPageStep } from '../../../utils/constants'
import { translate } from './../../../i18n/i18n'
import { step3FieldsSelector, recalculatedQuoteSelector } from '../../../selectors/configurator-selector'
import { step3ActiveElementSelector } from '../../../selectors/redux-form-selector'

const checkedExtraFields = pipe(filter(o => o), keys)
const existCheckedExtraField = pipe(checkedExtraFields, isEmpty, not)

class ExtraOptions extends Component {

  static propTypes = {
    recalculateQuote: PropTypes.func,
    changeFieldValue: PropTypes.func,
    validateDiscountCode: PropTypes.func,
    productId: PropTypes.string,
    step3Fields: PropTypes.object,
    formValues: PropTypes.object,
    active: PropTypes.bool,
    invalid: PropTypes.bool,
    asyncValidating: PropTypes.bool,
  }

  handleRecalculate = e => {
    const { productId, step3Fields, formValues, recalculateQuote } = this.props
    const discount = formValues && formValues[DISCOUNT]
    const payload = {
      productId,
      extraFields: pipe(checkedExtraFields, join(','))(step3Fields)
    }
    discount && (payload[DISCOUNT] = discount)

    recalculateQuote(payload)
  }

  success = () => {
    const modal = Modal.success({
      title: 'Work in progress'
    })
    return <div>{modal}</div>
  }

  isDisabledRecalculateBtn = () => {
    console.log('isDisabledRecalculateBtn', this.props)
    const { step3Fields, active, invalid, asyncValidating, formValues } = this.props
    const anyChecked = existCheckedExtraField(step3Fields)
    const discount = formValues && formValues[DISCOUNT]
    return invalid || active || asyncValidating || !anyChecked && !discount
  }

  render() {
    console.log('ExtraOptions render ', this.props)
    const { items, price, changeFieldValue, recalculatedQuote } = this.props

    return (
      <div className="eo-container">
        <div className="eo-title">
          {translate('configurator.SelectExtras')}
        </div>
        <div className="eo-ef-container">
          {items.map(exField => (
            <div key={exField.Id}>
              <ExtraField exField={exField} changeFieldValue={changeFieldValue} />
            </div>
          ))}
        </div>
        <DiscountField handleRecalculate={this.handleRecalculate} />
        <div className="eo-recalc-button">
          <Button disabled={this.isDisabledRecalculateBtn()} onClick={this.handleRecalculate}>
            {translate('btn.RecalculateQuote')}
          </Button>
        </div>
        <div className="eo-bottom-container">
          <div className="eo-bottom-titles">
            <div className="eo-bottom-totalquote">
              {translate('configurator.TotalQuote')}
            </div>
            <div className="eo-bottom-monhtly">
            €{recalculatedQuote || price} / {translate('configurator.AMonth')}
            </div>
          </div>
          <div className="eo-bottom-navbutton">
            <Button onClick={this.success}>
              {translate('btn.Complete')}
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  step3Fields: step3FieldsSelector(state),
  active: step3ActiveElementSelector(state),
  formValues: getFormValues(ConfiguratorPageStep.STEP3)(state),
  recalculatedQuote: recalculatedQuoteSelector(state),
})

const mapDispatchToProps = ({
  changeFieldValue,
  recalculateQuote,
  validateDiscountCode,
})

const ExtraOptionsConnected = connect(mapStateToProps, mapDispatchToProps)(ExtraOptions)

export default props => {
  const Form = reduxForm({
    form: ConfiguratorPageStep.STEP3,
    validate: Validator,
    asyncValidate: AsyncValidator(props.productId),
    asyncBlurFields: [DISCOUNT]
  })(ExtraOptionsConnected)

  return <Form {...props} />
}
