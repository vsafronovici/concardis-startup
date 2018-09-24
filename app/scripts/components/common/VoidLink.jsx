import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line no-script-url
const VoidLink = props => <a href="javascript:void(0)" {...props}>{props.children}</a>

VoidLink.propTypes = {
  children: PropTypes.object
}

export default VoidLink
