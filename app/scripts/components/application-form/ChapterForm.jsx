import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ReduxDynamicForm } from './ReduxDynamicForm'
import { currentChapterSelector } from '../../selectors/application-form-selector'

export const ChapterForm = ({ chapter }) => <ReduxDynamicForm chapter={chapter} />

const mapStateToProps = state => ({
  chapter: currentChapterSelector(state)
})

ChapterForm.propTypes = {
  chapter: PropTypes.object
}

export default connect(mapStateToProps)(ChapterForm)
