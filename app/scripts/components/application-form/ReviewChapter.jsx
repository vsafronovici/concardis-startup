import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cn from 'classnames'

import { chaptersSelector } from '../../selectors/application-form-selector'
import { SectionForm } from './SectionForm'
import { ReadSectionForm } from './ReadSectionForm'

const ReviewChapter = ({ chapter, editMode }) => editMode
  ? (
    <div className={cn('review-mode', { 'edit-mode': editMode })}>
      <SectionForm chapter={chapter} />
    </div>
  )
  : <ReadSectionForm chapter={chapter} />

const mapStateToProps = state => ({
  chapters: chaptersSelector(state)
})

export default connect(mapStateToProps)(ReviewChapter)
