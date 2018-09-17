import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { translate } from './../../i18n/i18n'

export class OptionCard extends React.Component {
  static propTypes = {
    readonly: PropTypes.bool
  }

  static defaultProps = {
    readonly: false
  }

  chooseOption = e => {
    const { id, onChooseOption } = this.props
    onChooseOption(id)
  }

  render() {
    const { active, name, description, price, items, readonly } = this.props
    const elProps = {
      className: cn('option-card', { active, readonly })
    }
    !readonly && (elProps.onClick = this.chooseOption)

    return (
      <div {...elProps}>
        <div className="oc-top" />
        <div className="oc-content">
          <div className="oc-title">{name}</div>
          <div className="oc-subtitle">{description}</div>
          <div className="oc-items">
            {
              items.map((item, idx) => (
                <div className="oc-item" key={idx}>
                  <i className="oc-item-icon" />
                  <div className="oc-item-content">{item}</div>
                </div>
              ))
            }
          </div>
          <div className="oc-price">€{price} / {translate('configurator.AMonth')}</div>
        </div>
      </div>
    )
  }
}

