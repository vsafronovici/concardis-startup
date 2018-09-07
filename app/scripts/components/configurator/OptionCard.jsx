import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Icon } from 'antd'
import cn from 'classnames'


export class OptionCard extends React.Component {

  static propTypes = {
    sections: PropTypes.array
  }

  render() {
    const { active } = this.props
    return (
      <div className={cn('option-card', { active })}>
        <div className="oc-top"></div>


        <div style={{justifyContent: 'center'}}>

        <div className="oc-content">
          <div className="oc-title">Option A</div>
          <div className="oc-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          <div className="oc-items">
            <div className="oc-item">
              <i className="oc-item-icon"></i>
              <div className="oc-item-content">Lorem ipsum dolor</div>
            </div>
            <div className="oc-item">
              <i className="oc-item-icon"></i>
              <div className="oc-item-content">Lorem ipsum dolor</div>
            </div>
          </div>
          <div className="oc-price">€5 / a month</div>
        </div>

        </div>

      </div>
    )
  }
}




