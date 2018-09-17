import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { getFormValues, getFormSyncErrors } from 'redux-form'

import { translate } from './../../i18n/i18n'
import { DynamicForm } from './DynamicForm'
import { Validator } from './form-validator'
import { editSection, saveFieldsSectionReq } from '../../actions/application-form-action'
import {
  sectionFieldsSelector, sectionStateSelector, sectionFieldsValuesSelector
} from '../../selectors/application-form-selector'

const mapDispatchToProps = ({
  saveFieldsSectionReq,
  editSection
})

/* const initialValueReducer = (acc, field) => {
  const { name, value } = field
  if (!value) {
    return acc
  }

  return {
    ...acc,
    [name]: value
  }
}*/


// const getInitialValues = fields => fields.reduce(initialValueReducer, {})

const createDynamicReduxForm = ({ section, fields, fieldsValues }) => {
  const formId = `form_${section.id}`
  const ReduxForm = reduxForm({
    form: formId,
    initialValues: fieldsValues,
    validate: Validator(fields),
    // enableReinitialize: true,
    // keepDirtyOnReinitialize: true,
    destroyOnUnmount: false
  })(DynamicForm)

  const mapStateToProps = state => ({
    rValues: getFormValues(formId)(state),
    rSyncErrors: getFormSyncErrors(formId)(state)
  })

  return connect(mapStateToProps, mapDispatchToProps)(ReduxForm)
}

export class FormSection extends React.Component {
  static propTypes = {
    section: PropTypes.object
  }

  render() {
    const { section, sectionState, fields, fieldsValues, submitting } = this.props
    const ReduxForm = createDynamicReduxForm({ section, fields, fieldsValues })

    return <ReduxForm section={section} sectionState={sectionState} fields={fields} rSubmitting={submitting} />
  }
}

const mapStateToProps = (state, props) => {
  const x = sectionStateSelector(state, props)

  return {
    sectionState: sectionStateSelector(state, props),
    fields: sectionFieldsSelector(state, props),
    fieldsValues: sectionFieldsValuesSelector(state, props),
  }
}

export default connect(mapStateToProps)(FormSection)

