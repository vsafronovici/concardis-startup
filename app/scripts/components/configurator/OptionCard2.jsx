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
    const { } = this.props
    const mock = ['Product feature 1', 'Product feature 2','Product feature 3','Product feature 4']
    return (
      <div className="option-card2">
        <div className="oc-top">
          <div className="oc-top-image">
            <h2>image</h2>
          </div>
        </div>
        <div className="oc-content">
          <div className="oc-title">
            Mobile package A
          </div>
          <div className="oc-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud 
          </div>
          <div className="oc-items">
          {mock.map((item, index) => {
            return(
              <div key={index} className="oc-item">
              {item}
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
              Footer description
            </div>
          </div>
        
      </div>
    )
  }
}

