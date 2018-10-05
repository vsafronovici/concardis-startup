import React from 'react'
import PropTypes from 'prop-types'
import { getFormSyncErrors, getFormValues, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { DynamicForm } from './DynamicForm'
import { Validator } from './form-validator'

// TODO remove
const initialValues = { f1: 'x1', f3: '2', f4: '2', f5: true }

export class ReduxDynamicForm extends React.Component {
  static propTypes = {
    section: PropTypes.object,
  }

  render() {
    console.log('ReduxDynamicForm', this.props)
    const { section } = this.props

    const formId = `dynamicForm`
    const RForm = reduxForm({
      form: formId,
      initialValues,
      validate: Validator(section.fields),
      // enableReinitialize: true,
      // keepDirtyOnReinitialize: true,
      //destroyOnUnmount: false
    })(DynamicForm)

    const mapStateToProps = state => ({
      rValues: getFormValues(formId)(state),
      rSyncErrors: getFormSyncErrors(formId)(state)
    })

    const ConnectedReduxForm = connect(mapStateToProps)(RForm)

    return <ConnectedReduxForm section={section} />
  }
}

