import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cn from 'classnames'

import { chaptersSelector } from '../../selectors/application-form-selector'
import { ChapterForm } from './ChapterForm'
import { ReadChapterForm } from './ReadChapterForm'
import { goToSection } from '../../actions/application-form-action'

const ReviewChapter = ({ chapter, editMode, index, goToSectionAction }) => (editMode
  ? (
    <div className={cn('review-mode', { 'edit-mode': editMode })}>
      <ChapterForm chapter={chapter} />
    </div>
  )
  : <ReadChapterForm chapter={chapter} index={index} editSection={goToSectionAction} />)

const mapStateToProps = state => ({
  chapters: chaptersSelector(state)
})

const mapDispatchToProps = ({
  goToSectionAction: goToSection
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewChapter)

ReviewChapter.propTypes = {
  chapter: PropTypes.object,
  editMode: PropTypes.bool,
  index: PropTypes.number,
  goToSectionAction: PropTypes.func
}
