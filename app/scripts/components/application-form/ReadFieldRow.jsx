import React from 'react'
import { Field } from 'redux-form'

import { translate } from '../../i18n/i18n'
import { FieldType } from '../../utils/constants'
import { parseCheckBoxValues } from "../../utils/function-utils";


const renderFieldComponent = ({ idx, field, value }) => {
  const { type, title } = field
  console.log('renderFieldComponent', translate(value), { field, value })
  const label = translate(field.label)
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
    case FieldType.BOXED_RADIO_BTNS: {
    }
    case FieldType.BOXED_CHECKBOX: {
      valueToDisplay = null
      break
    }
    // case FieldType.CHECKBOX: {
    // }
    case FieldType.DROPDOWN: {
      valueToDisplay = translate(value)
      break
    }
    case FieldType.BOXED_CHECKBOX_GROUP: {
      //console.log('BOXED_CHECKBOX_GROUP', value)
      valueToDisplay = parseCheckBoxValues(value)
      break
    }
    case FieldType.HORIZONTAL_RADIO_BTNS: {
      valueToDisplay = translate(value)
      break
    }
    case FieldType.DATE: {
    }
    case FieldType.TEXT_BOLD: {
      valueToDisplay = value
      break
    }
    case FieldType.TITLE: {
      valueToDisplay = translate(title)
      break
    }
    default: {
      valueToDisplay = value
    }
  }
  return <div>
    {type !== FieldType.TITLE && <span className="label">{label}:</span>}
    <span className="value">{valueToDisplay}</span>
  </div>
}

export const ReadFieldRow = ({ idx, field, value }) => (
  <div className={field.type === FieldType.TITLE ? "form-field-row-read-title" : "form-field-row-read"}>
    { renderFieldComponent({ idx, field, value }) }
  </div>
)

