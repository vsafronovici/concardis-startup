import React, { Component } from 'react'
import PropTypes from 'prop-types'

const jQuery = window.jQuery || {}

export class TACContent extends Component {
  componentDidMount() {
    const { id, enableBtn } = this.props
    const iframe = document.getElementById(`${id}-iframe`).contentWindow
    console.log('TermsAndConditionsModal Content2.componentDidMount', iframe)

    jQuery(iframe).scroll(() => {
      const scrollTop = jQuery(iframe).scrollTop()
      const height = jQuery(iframe).height()
      const innerHeight = jQuery(iframe.document).innerHeight()
      console.log('TermsAndConditionsModal', { scrollTop, height, innerHeight })

      if (this.props.show && scrollTop + height === innerHeight) {
        console.log('TermsAndConditionsModal ===============End')
        enableBtn()
      }
    })
  }

  render() {
    const { id, height, lang } = this.props
    return (
      <iframe
        src={window.configSettings.resources.TAD[lang]}
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

