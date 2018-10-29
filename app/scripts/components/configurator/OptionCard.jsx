import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { translate } from './../../i18n/i18n'

export class OptionCard extends React.Component {
  static propTypes = {
    readonly: PropTypes.bool,
    active: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    items: PropTypes.array,
    onChooseOption: PropTypes.func,
    features: PropTypes.array,
    includedItems: PropTypes.array
  }

  static defaultProps = {
    readonly: false
  }

  chooseOption = e => {
    const { id, onChooseOption } = this.props
    onChooseOption(id)
  }

  render() {
    const { active, name, description, features, readonly, includedItems } = this.props
    const elProps = {
      className: cn('option-card', { active, readonly })
    }
    if (!readonly) {
      elProps.onClick = this.chooseOption
    }
    return (
      <div {...elProps}>
        <div className="oc-top">
          <div className="container-image">
            <img src={window.configSettings.resources.imgs.product} alt="" />
          </div>
        </div>
        <div className="oc-content">
          <div className="oc-title">{name}</div>
          <div className="oc-subtitle">{description}</div>
          <div className="oc-items">
            {
              features.map((item, idx) => (
                <div className="oc-item" key={idx}>
                  {/* <i className="oc-item-icon" />*/}
                  <div className="oc-item-content">{item.name}</div>
                </div>
              ))
            }

          </div>

          {/* <div className="oc-price">€{price} / {translate('configurator.AMonth')}</div>*/}
        </div>
        <hr />
        <div className="oc-footer">
          <div style={{ marginBottom: '10px' }}><strong >{translate('configurator.optionCards.accIncluded')}</strong></div>
          {includedItems.map(item => (
            <div key={item.name}>
              {item.quantity.value > 1 && <span>{item.quantity.value}x</span>} {item.name}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

