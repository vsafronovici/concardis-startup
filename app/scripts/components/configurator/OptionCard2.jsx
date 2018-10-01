import React from 'react'
import PropTypes from 'prop-types'
import { translate } from './../../i18n/i18n'

export class OptionCard extends React.Component {
  static propTypes = {
    quote: PropTypes.object
  }
  render() {
    const { quote: { description, name, features, includedItems } } = this.props
    return (
      <div className="oc2-container">
        <div className="oc2-name">
          {translate('configurator.packagePage.selectedPackage')}
        </div>
        <div className="option-card2">
          <div className="oc-top">
            <div className="oc-top-image">
              <h2>image</h2>
            </div>
          </div>
          <div className="oc-content">
            <div className="oc-title">
              {name}
            </div>
            <div className="oc-subtitle">
              {description}
            </div>
            <div className="oc-items">
              {features.map((item, index) => (
                <div key={item.name} className="oc-item">
                  {item.description}
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="oc-footer">
            <div className="oc-footer-title">
              {translate('configurator.packagePage.package.accessories')}
            </div>
            <div>
              {includedItems.map(item => (
                <div key={item.name}>
                  {item.quantity.value > 1 && <span>{item.quantity.value}x</span>} {item.description}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

