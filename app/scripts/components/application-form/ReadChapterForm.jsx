import React from 'react'
import PropTypes from 'prop-types'
import { createInitialValues, fieldsToShow } from '../../utils/application-form-utils'
import { isNilOrEmpty } from '../../utils/function-utils'
import { ReadFieldRow } from './ReadFieldRow'

export const ReadChapterForm = ({ chapter }) => {
  const serverValues = createInitialValues(chapter)
  const fieldsToDisplay = fieldsToShow(chapter, serverValues)
  return <div style={{border: '1px solid red'}}>
    { fieldsToDisplay.map((field, idx) => <ReadFieldRow key={field.name} field={field} idx={idx} value={serverValues[field.name]} />) }
  </div>
}

