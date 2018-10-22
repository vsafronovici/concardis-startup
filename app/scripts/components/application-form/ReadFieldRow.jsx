import React from 'react'
import { Field } from 'redux-form'

import { translate } from '../../i18n/i18n'
import { FieldType } from '../../utils/constants'



const renderFieldComponent = ({ idx, field, value }) => {
  const { type } = field

  const label = translate(field.label)
  let valueToDisplay

  switch (type) {
    case FieldType.TEXT: {
      valueToDisplay = value
    }
    case FieldType.VERTICAL_RADIO_BTNS: {
    }
    case FieldType.BOXED_RADIO_BTNS: {
    }
    case FieldType.BOXED_CHECKBOX: {
    }
    case FieldType.CHECKBOX: {
    }
    case FieldType.DROPDOWN: {
    }
    case FieldType.BOXED_CHECKBOX_GROUP: {
    }
    case FieldType.HORIZONTAL_RADIO_BTNS: {
    }
    case FieldType.DATE: {
    }
    case FieldType.TEXT_BOLD: {
    }
    default: {
      valueToDisplay = value
    }

    return <div>
      <span>{label}:</span>
      <span>{valueToDisplay}</span>
    </div>
  }
}

export const ReadFieldRow = ({ idx, field, value }) => (
  <div className="form-field-row-read">
    { renderFieldComponent({ idx, field, value }) }
  </div>
)

