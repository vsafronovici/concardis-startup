import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ReduxDynamicForm } from './ReduxDynamicForm'
import { currentChapterSelector } from '../../selectors/application-form-selector'

const SectionForm = ({ chapter }) => <ReduxDynamicForm chapter={chapter} />

const mapStateToProps = state => ({
  chapter: currentChapterSelector(state)
})

export default connect(mapStateToProps)(SectionForm)
