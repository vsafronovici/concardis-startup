import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cn from 'classnames'

import { chaptersSelector } from '../../selectors/application-form-selector'
import { ChapterForm } from './ChapterForm'
import { ReadChapterForm } from './ReadChapterForm'

const ReviewChapter = ({ chapter, editMode }) => editMode
  ? (
    <div className={cn('review-mode', { 'edit-mode': editMode })}>
      <ChapterForm chapter={chapter} />
    </div>
  )
  : <ReadChapterForm chapter={chapter} />

const mapStateToProps = state => ({
  chapters: chaptersSelector(state)
})

export default connect(mapStateToProps)(ReviewChapter)
