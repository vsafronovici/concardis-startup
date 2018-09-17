import React, { Component } from 'react'
import { Checkbox, Icon } from 'antd'
import { translate } from './../../../../i18n/i18n'

import { ConfiguratorPageStep } from '../../../../utils/constants'
import CheckBoxField from './../../../common/CheckBoxField'

export class ExtraField extends Component {
  handleCheckBox = (value) => {
    const { exField: { Id: name } } = this.props
    this.props.changeFieldValue({ value, name, step: ConfiguratorPageStep.STEP3 })
  }

  render() {
    const { exField: { name, description, price } } = this.props
    return (
      <div className="ef-container">
        <CheckBoxField handleChange={this.handleCheckBox} />
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
