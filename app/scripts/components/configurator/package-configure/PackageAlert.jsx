import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import { translate } from './../../../i18n/i18n'
import { format } from '../../../utils/function-utils'

export const PackageAlert = ({ dateValidTill }) => (
  <div className="pd-alert-container  flex-row">
    <Icon type="exclamation-circle" theme="outlined" style={{ fontSize: '30px', color: '#616161', marginTop: '7px' }} />
    <div className="pd-card-description">
      {format(translate('configurator.applicationResume.alertMsg'), dateValidTill)}
    </div>
  </div>
)

PackageAlert.propTypes = {
  dateValidTill: PropTypes.string,
}

