import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { getFormValues, getFormSyncErrors } from 'redux-form'

import { translate } from './../../i18n/i18n'
import { DynamicForm } from './DynamicForm'
import { Validator } from './form-validator'
import { initData, saveFieldsSectionReq } from '../../actions/application-form-action'
import { applicationFormSelector } from '../../selectors/application-form-selector'
import { i18nSelector } from '../../selectors/i18n-selector'

const mapDispatchToProps = ({
  saveFieldsSectionReq
})


const createDynamicReduxForm = ({ id, fields }) => {
  const formId = `form_${id}`
  const ReduxForm = reduxForm({
    form: formId,
    initialValues: getInitialValues(fields),
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
    console.log('FormSection ---', this.props)
    const { section, submitting } = this.props
    const ReduxForm = createDynamicReduxForm(section)
    return (
      <div className="form-section">
        <Row>
          <Col lg={{span: 12}}>
            <div className="section-title"><h3>{translate(section.title)}</h3></div>
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 12, offset: 12}}>
            <div className="section">
              <ReduxForm section={section} rSubmitting={submitting} />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}


