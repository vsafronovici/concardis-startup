import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { chaptersSelector, currentSelector } from '../../selectors/application-form-selector'
import ReviewChapter from './ReviewChapter'

const ReviewChapters = ({ chapters, current }) =>
  chapters.map((chapter, idx) => <ReviewChapter chapter={chapter} editMode={current === idx} />)

const mapStateToProps = state => ({
  chapters: chaptersSelector(state),
  current: currentSelector(state)
})

export default connect(mapStateToProps)(ReviewChapters)
