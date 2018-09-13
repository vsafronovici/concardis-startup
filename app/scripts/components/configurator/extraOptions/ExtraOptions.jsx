import React, { Component } from 'react'
import { Button, Modal } from 'antd'
import { connect } from 'react-redux'
import { getFormValues, isValid, reduxForm } from 'redux-form'
import { keys, pipe, filter, join } from 'ramda'


import { ExtraField } from './extraField/ExtraField'
import { DiscountField, DISCOUNT, Validator, AsyncValidator } from './DiscountField'
import { changeFieldValue, recalculateQuote, validateDiscountCode } from '../../../actions/configurator-action'
import { goToStep } from '../../../actions/configurator-action'
import { ConfiguratorPageStep } from '../../../utils/constants'
import { translate } from './../../../i18n/i18n'
import { step3FieldsSelector, recalculateQuoteSelector } from '../../../selectors/configurator-selector'
import { step3ActiveElementSelector } from '../../../selectors/redux-form-selector'

const extraFields = pipe(filter(o => o), keys, join(','))

class ExtraOptions extends Component {

  handleRecalculate = e => {
    console.log('handleRecalculate', this.props)
    const { productId, step3Fields, formValues: { [DISCOUNT]: discount }, recalculateQuote } = this.props
    recalculateQuote({
      productId,
      discount,
      extraFields: extraFields(step3Fields)
    })
  }

  success = () => {
    const modal = Modal.success({
      title: 'Work in progress'
    });
    return <div>{modal}</div>
    
  }

  render() {
    console.log('ExtraOptions render ', this.props)
    const { items, price, changeFieldValue, goToStep, active, invalid, asyncValidating, recalculatedQuote } = this.props
     
    
    return (
      <div className="eo-container">
        <div className="eo-title">
          {translate('configurator.SelectExtras')}
        </div>
        <div className="eo-ef-container">
          {items.map(exField => {
            return (
              <div key={exField.Id}>
                <ExtraField exField={exField} changeFieldValue={changeFieldValue}/>
              </div>
            )
          })}
        </div>
        <DiscountField handleRecalculate={this.handleRecalculate}/>
        <div className="eo-recalc-button">
          <Button disabled={active || invalid || asyncValidating} onClick={this.handleRecalculate}>
            {translate('btn.RecalculateQuote')}
          </Button>
        </div>
        <div className="eo-bottom-container">
          <div className="eo-bottom-titles">
            <div className="eo-bottom-totalquote">
              {translate('configurator.TotalQuote')}
            </div>
            <div className="eo-bottom-monhtly">
            € {recalculatedQuote || price} / {translate('configurator.AMonth')}
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
  recalculatedQuote: recalculateQuoteSelector(state),
})

const mapDispatchToProps = ({
  changeFieldValue,
  recalculateQuote,
  validateDiscountCode,
  goToStep
})

const ExtraOptionsReduxForm = reduxForm({
  form: ConfiguratorPageStep.STEP3,
  validate: Validator,
  asyncValidate: AsyncValidator,
  asyncBlurFields: [DISCOUNT]
})(ExtraOptions)


export default connect(mapStateToProps, mapDispatchToProps)(ExtraOptionsReduxForm)
