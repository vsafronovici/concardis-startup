import React from 'react'
import PropTypes from 'prop-types'

import { translate } from '../../i18n/i18n'
import { FieldType } from '../../utils/constants'

const renderFieldComponent = ({ idx, field, value }) => {
  const { type } = field

  let label = translate(field.label)
  let valueToDisplay
  switch (type) {
    case FieldType.TEXT: {
      valueToDisplay = value
      break
    }
    case FieldType.VERTICAL_RADIO_BTNS: {
      valueToDisplay = translate(value)
      break
    }
    case FieldType.BOXED_CHECKBOX: {
      valueToDisplay = null
      label = null
      break
    }
    case FieldType.CHECKBOX: {
      label = null
      break
    }
    case FieldType.DROPDOWN: {
      valueToDisplay = translate(value)
      break
    }
    case FieldType.BOXED_CHECKBOX_GROUP: {
      label = null
      valueToDisplay = null
      break
    }
    case FieldType.HORIZONTAL_RADIO_BTNS: {
      valueToDisplay = translate(value)
      break
    }
    case FieldType.DATE: {
      valueToDisplay = value
      break
    }
    case FieldType.TEXT_BOLD: {
      valueToDisplay = value
      break
    }
    case FieldType.TITLE: {
      valueToDisplay = label
      break
    }
    default: {
      valueToDisplay = value
    }
  }

  return (
    <div>
      {type !== FieldType.TITLE && label && <span className="label">{label}:</span>}
      <span className="value">{valueToDisplay}</span>
    </div>
  )
}

renderFieldComponent.propTypes = {
  idx: PropTypes.number,
  field: PropTypes.object,
  value: PropTypes.any,
}

export const ReadFieldRow = ({ idx, field, value }) => (
  <div className={field.type === FieldType.TITLE ? 'form-field-row-read-title' : 'form-field-row-read'}>
    { renderFieldComponent({ idx, field, value }) }
  </div>
)

ReadFieldRow.propTypes = {
  idx: PropTypes.number,
  field: PropTypes.object,
  value: PropTypes.any,
}

