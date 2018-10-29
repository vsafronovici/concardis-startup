import React from 'react'
import PropTypes from 'prop-types'
import { getFormSyncErrors, getFormValues, reduxForm, focus } from 'redux-form'
import { connect } from 'react-redux'

import DynamicForm from './DynamicForm'
import { Validator } from './form-validator'
import { createInitialValues, DYNAMIC_FORM_PREFIX } from '../../utils/application-form-utils'

export class ReduxDynamicForm extends React.Component {
  static propTypes = {
    chapter: PropTypes.object,
  }

  render() {
    const { chapter } = this.props

    const formId = `${DYNAMIC_FORM_PREFIX}${chapter.sequence}`
    const RForm = reduxForm({
      form: formId,
      initialValues: createInitialValues(chapter),
      validate: Validator(chapter),

      // enableReinitialize: true,
      // keepDirtyOnReinitialize: true,
      // destroyOnUnmount: false
    })(DynamicForm)

    const mapStateToProps = state => ({
      rValues: getFormValues(formId)(state),
      rSyncErrors: getFormSyncErrors(formId)(state)
    })

    const mapDispatchToProps = (dispatch) => ({
      // This will be passed as a property to this component
      rFocus: (field) => {
        dispatch(focus(formId, field))
      }
    })

    const ConnectedReduxForm = connect(mapStateToProps, mapDispatchToProps)(RForm)

    return <ConnectedReduxForm chapter={chapter} />
  }
}

