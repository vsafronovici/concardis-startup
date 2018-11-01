import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { createInitialValues, fieldsToShow } from '../../utils/application-form-utils'
import { ReadFieldRow } from './ReadFieldRow'
import { translate } from '../../i18n/i18n'

export const ReadChapterForm = ({ chapter, index, editSection }) => {
  const serverValues = createInitialValues(chapter)
  const fieldsToDisplay = fieldsToShow(chapter, serverValues)

  return (
    <div className="read-chapter-form">
      <div className="read-field-row-container">
        <div className="chapter-title">
          {translate(chapter.title)}
        </div>
        { fieldsToDisplay.map((field, idx) => <ReadFieldRow key={field.name + idx} field={field} idx={idx} value={serverValues[field.name]} />) }
      </div>
      <div className="edit-button">
        <Button onClick={() => editSection(index)}>Edit</Button>
      </div>
    </div>
  )
}

ReadChapterForm.propTypes = {
  chapter: PropTypes.any,
  index: PropTypes.number,
  editSection: PropTypes.func,
}
