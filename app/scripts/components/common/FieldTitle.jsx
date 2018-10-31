import React from 'react'
import PropTypes from 'prop-types'
import { translate } from '../../i18n/i18n'

export const FieldTitle = ({ label }) => <div className="field-title">{translate(label)}</div>

FieldTitle.propTypes = {
  label: PropTypes.string
}
