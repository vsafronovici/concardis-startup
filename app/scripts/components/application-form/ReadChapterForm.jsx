import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { createInitialValues, fieldsToShow } from '../../utils/application-form-utils'
import { isNilOrEmpty } from '../../utils/function-utils'
import { ReadFieldRow } from './ReadFieldRow'
import { translate } from '../../i18n/i18n'
import { goToNextSection } from "../../actions/application-form-action";

export const ReadChapterForm = ({ chapter, index, editSection }) => {
  const serverValues = createInitialValues(chapter)
  const fieldsToDisplay = fieldsToShow(chapter, serverValues)
  return <div className="read-chapter-form">

    <div className='read-field-row-container'>
      <div className="chapter-title">
        {translate(chapter.title)}
      </div>
      { fieldsToDisplay.map((field, idx) => <ReadFieldRow key={field.name} field={field} idx={idx} value={serverValues[field.name]} />) }
    </div>
    <div className="edit-button">
      <Button onClick={() => editSection(index)}>EDIT</Button>
    </div>
    </div>
}

