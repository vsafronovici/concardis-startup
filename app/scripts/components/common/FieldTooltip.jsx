import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Tooltip } from 'antd'
import { translate } from '../../i18n/i18n'

export const FieldTooltip = ({ title }) =>
  <Tooltip  placement="rightTop" trigger="hover" title={translate(title)}>
    <div className="tooltip-field"><Icon type="info-circle" style={{ fontSize: '0.8em', color: '#08c' }} /></div>
  </Tooltip>

FieldTooltip.propTypes = {
  title: PropTypes.string
}
