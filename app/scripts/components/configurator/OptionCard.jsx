import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Icon } from 'antd'
import cn from 'classnames'


export class OptionCard extends React.Component {

  static propTypes = {
    sections: PropTypes.array
  }

  chooseOption = e => {
    const { id, onChooseOption } = this.props
    console.log('clicked', id)
    onChooseOption(id)
  }

  render() {
    const { active, name, description, price, items } = this.props
    return (
      <div className={cn('option-card', { active })} onClick={this.chooseOption}>
        <div className="oc-top"></div>
        <div className="oc-content">
          <div className="oc-title">{name}</div>
          <div className="oc-subtitle">{description}</div>
          <div className="oc-items">
            {
              items.map((item, idx) => (
                <div className="oc-item" key={idx}>
                  <i className="oc-item-icon"></i>
                  <div className="oc-item-content">{item}</div>
                </div>
              ))
            }
          </div>
          <div className="oc-price">€{price} / a month</div>
        </div>
      </div>
    )
  }
}




