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

    return (
      <div className="option-card2">
        <div className="oc-top" />
        <div className="oc-content">
          <div className="oc-title">name</div>
          <div className="oc-subtitle">description</div>
          <div className="oc-items">
          </div>
        </div>
      </div>
    )
  }
}

