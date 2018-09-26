import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { translate } from './../../i18n/i18n'

export class OptionCard extends React.Component {
  static propTypes = {
    readonly: PropTypes.bool,
    product: PropTypes.object
  }

  static defaultProps = {
    readonly: false
  }

  render() {
    console.log('Option Card2 ', this.props)
    const { quote: { description, name, features, includedItems } } = this.props
    return (
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
          {features.map((item, index) => {
            return(
              <div key={item.name} className="oc-item">
              {item.description}
              </div>
            )
          })}
            </div>
          </div>
          <hr/>
          <div className="oc-footer">
            <div className="oc-footer-title">
              Footer Title
            </div>
            <div>
              {includedItems.map(item => {
                return(
                  <div key={item.name}>
                    {item.description}
                  </div>
                )
              })}
            </div>
          </div>
      </div>
    )
  }
}

