import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class TACContent extends Component {
  componentDidMount() {
    const { id, enableBtn } = this.props
    const iframe = document.getElementById(`${id}-iframe`).contentWindow

    jQuery(iframe).scroll((e) => {
      const scrollTop = jQuery(iframe).scrollTop()
      const height = jQuery(iframe).height()
      const innerHeight = jQuery(iframe.document).innerHeight()

      if ((scrollTop === (innerHeight - height)) && this.props.show) {
        enableBtn()
      }
    });
  }

  render() {
    const { id, height, lang } = this.props
    return (
      <iframe
        src={window.configSettings.resources.TAD[lang]}
        id={`${id}-iframe`}
        height={height}
        width={'100%'}
        scrolling="true"
        frameBorder="0">Loading...</iframe>
    )
  }
}

