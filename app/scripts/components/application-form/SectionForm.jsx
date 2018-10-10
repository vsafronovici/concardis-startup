import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ReduxDynamicForm } from './ReduxDynamicForm'
import { currentSectionSelector, fieldsSelector } from '../../selectors/application-form-selector'

const SectionForm = props => {
  const { section, fields } = props
  return <ReduxDynamicForm section={section} fields={fields} />
}

const mapStateToProps = state => ({
  section: currentSectionSelector(state),
  fields: fieldsSelector(state),
})

export default connect(mapStateToProps)(SectionForm)
