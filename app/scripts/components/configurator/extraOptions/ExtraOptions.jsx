import React, { Component } from 'react'
import { Input, Button } from 'antd'
import { connect } from 'react-redux'

import { ExtraField } from './extraField/ExtraField'
import { changeFieldValue } from '../../../actions/configurator-action'
import { goToStep } from '../../../actions/configurator-action'
import { ConfiguratorPageStep } from '../../../utils/constants'
import { translate } from './../../../i18n/i18n'

class ExtraOptions extends Component {

  render() {
    const { items, price, changeFieldValue, goToStep } = this.props
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
        <div className="eo-question">
          question
        </div>
        <div className="eo-input">
          <Input placeholder="placeHolder"/>
        </div>
        <div className="eo-recalc-button">
          <Button>
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

const mapDispatchToProps = ({
  changeFieldValue,
  goToStep
})

export default connect(null, mapDispatchToProps)(ExtraOptions)
