import React, { Component } from 'react'
import PropTypes from 'prop-types'

const jQuery = window.jQuery || {}

export class TACContent extends Component {
  static propTypes = {
    id: PropTypes.string,
    enableBtn: PropTypes.func,
    show: PropTypes.bool,
    height: PropTypes.number,
    lang: PropTypes.string,
  }

  componentDidMount() {
    const { id, enableBtn } = this.props
    const iframe = document.getElementById(`${id}-iframe`).contentWindow

    jQuery(iframe).scroll(() => {
      const scrollTop = jQuery(iframe).scrollTop()
      const height = jQuery(iframe).height()
      const innerHeight = jQuery(iframe.document).innerHeight()

      if (this.props.show && scrollTop + height === innerHeight) {
        enableBtn()
      }
    })
  }

  render() {
    const { id, height, lang } = this.props
    return (
      <iframe
        src={window.configSettings.resources.TAD[lang]}
        title={`${id}-iframe`}
        id={`${id}-iframe`}
        height={height}
        width="100%"
        scrolling="true"
        frameBorder="0"
      >Loading...
      </iframe>
    )
  }
}
