import React, { Component } from 'react';
import { Checkbox } from 'antd';
import { ConfiguratorPageStep } from '../../../../utils/constants'
import { translate } from './../../../../i18n/i18n'

export class ExtraField extends Component {

  handleChange = value => {
    const { exField: { Id: name } } = this.props
    this.props.changeFieldValue({ value, name, step: ConfiguratorPageStep.STEP3 })
  }

  render() {
    console.log('ExtraField', this.props)
    const { exField: { name, description, price } } = this.props
    return (
      <div className="ef-container">
        <div className="ef-checkbox">
          <Checkbox onChange={(e) => this.handleChange(e.target.checked)}/>
        </div>
        <div className="ef-content">
          <div className="ef-content-title">
            {name}
          </div>
          <div className="ef-content-subtitle">
            {description}
          </div>
          <div className="ef-content-monthly">
            + €{price} / {translate('configurator.AMonth')}
          </div>
        </div>

      </div>
    )
  }
}
