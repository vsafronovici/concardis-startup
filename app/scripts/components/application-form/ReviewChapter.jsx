import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cn from 'classnames'

import { chaptersSelector } from '../../selectors/application-form-selector'
import { ChapterForm } from './ChapterForm'
import { ReadChapterForm } from './ReadChapterForm'
import { goToNextSection } from '../../actions/application-form-action'

const ReviewChapter = ({ chapter, editMode, index, goToNextSectionAction }) => editMode
  ? (
    <div className={cn('review-mode', { 'edit-mode': editMode })}>
      <ChapterForm chapter={chapter}/>
    </div>
  )
  : <ReadChapterForm chapter={chapter} index={index} editSection={goToNextSectionAction}/>

const mapStateToProps = state => ({
  chapters: chaptersSelector(state)
})

const mapDispatchToProps = ({
  goToNextSectionAction: goToNextSection
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewChapter)
