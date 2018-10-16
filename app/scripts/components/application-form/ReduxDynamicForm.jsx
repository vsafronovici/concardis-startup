import React from 'react'
import PropTypes from 'prop-types'
import { getFormSyncErrors, getFormValues, reduxForm, focus } from 'redux-form'
import { connect } from 'react-redux'

import DynamicForm from './DynamicForm'
import { Validator } from './form-validator'
import { DYNAMIC_FORM_PREFIX } from '../../utils/application-form-utils'

// TODO remove
const initialValues = { f1: 'x1', f3: '2', f4: '2', f5: true, f8: 'value1', f9: 'value2' }

export class ReduxDynamicForm extends React.Component {
  static propTypes = {
    section: PropTypes.object,
  }

  render() {
    console.log('ReduxDynamicForm', this.props)
    const { section, fields } = this.props

    const formId = `${DYNAMIC_FORM_PREFIX}${section.sequence}`
    const RForm = reduxForm({
      form: formId,
      // initialValues,
      validate: Validator(fields),

      // enableReinitialize: true,
      // keepDirtyOnReinitialize: true,
      //destroyOnUnmount: false
    })(DynamicForm)

    const mapStateToProps = state => ({
      rValues: getFormValues(formId)(state),
      rSyncErrors: getFormSyncErrors(formId)(state)
    })

    const mapDispatchToProps = (dispatch) => {
      return {
        // This will be passed as a property to this component
        rFocus: (field) => {
          dispatch(focus(formId, field))
        }
      }
    }

    const ConnectedReduxForm = connect(mapStateToProps, mapDispatchToProps)(RForm)

    return <ConnectedReduxForm section={section} fields={fields} />
  }
}

