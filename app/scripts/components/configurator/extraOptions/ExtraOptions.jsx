import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { getFormValues, isValid } from 'redux-form'

import { ExtraField } from './extraField/ExtraField'
import DiscountField, { DISCOUNT } from './DiscountField'
import { changeFieldValue, recalculateQuote } from '../../../actions/configurator-action'
import { goToStep } from '../../../actions/configurator-action'
import { ConfiguratorPageStep } from '../../../utils/constants'
import { translate } from './../../../i18n/i18n'
import { step3FieldsSelector } from '../../../selectors/configurator-selector'

class ExtraOptions extends Component {

  handleRecalculate = e => {
    console.log('handleRecalculate', this.props)
    const { productId, step3Fields, formValues: { [DISCOUNT]: discount }, recalculateQuote } = this.props
    recalculateQuote({
      ...step3Fields,
      productId,
      discount
    })
  }

  render() {
    console.log('ExtraOptions render ', this.props)
    const { items, price, changeFieldValue, goToStep, validForm } = this.props
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
        <DiscountField />
        <div className="eo-recalc-button">
          <Button disabled={!validForm} onClick={this.handleRecalculate}>
            {translate('btn.RecalculateQuote')}
          </Button>
        </div>
        <div className="eo-bottom-container">
          <div className="eo-bottom-titles">
            <div className="eo-bottom-totalquote">
              {translate('configurator.TotalQuote')}
            </div>
            <div className="eo-bottom-monhtly">
              €{price} / {translate('configurator.AMonth')}
            </div>
          </div>
          <div className="eo-bottom-navbutton">
            <Button onClick={() => goToStep(ConfiguratorPageStep.STEP1)}>
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
  validForm: isValid(ConfiguratorPageStep.STEP3)(state),
  formValues: getFormValues(ConfiguratorPageStep.STEP3)(state)
})

const mapDispatchToProps = ({
  changeFieldValue,
  recalculateQuote,
  goToStep
})

export default connect(mapStateToProps, mapDispatchToProps)(ExtraOptions)
