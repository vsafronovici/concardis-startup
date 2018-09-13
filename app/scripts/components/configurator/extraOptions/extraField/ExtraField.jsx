import React, { Component } from 'react';
import { Checkbox, Icon } from 'antd';
import { translate } from './../../../../i18n/i18n'

import { ConfiguratorPageStep } from '../../../../utils/constants'
import CheckBoxField from './CheckBoxField'

export class ExtraField extends Component {

    state = {
        checked: true
    }

  handleChange = value => {
    const { exField: { Id: name } } = this.props
    this.props.changeFieldValue({ value, name, step: ConfiguratorPageStep.STEP3 })
  }

  handleCheckBox = () => {
    this.setState({
      checked: !this.state.checked
    })
    console.log(this.state.checked)
    const { exField: { Id: name } } = this.props
    this.props.changeFieldValue({ value: this.state.checked, name, step: ConfiguratorPageStep.STEP3 })
  }

  render() {
    const { checked } = this.state
    //console.log('ExtraField', this.props)
    const { exField: { name, description, price } } = this.props
    return (
      <div className="ef-container">
        {/* <div className="ef-checkbox-container" onClick={this.handleCheckBox}>
          {!checked ? <Icon type="check" theme="outlined" className="ef-checkbox-check"/> : null}
        </div> */}
        <CheckBoxField handleChange={this.handleCheckBox} checked={checked}/>
        {/* <div className="ef-checkbox">
          <Checkbox onChange={(e) => this.handleChange(e.target.checked)}/>
        </div> */}
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
