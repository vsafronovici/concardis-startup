import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { getFormValues, getFormSyncErrors } from 'redux-form'

import { translate } from './../../i18n/i18n'
import { DynamicForm } from './DynamicForm'
import { Validator } from './form-validator'

const createDynamicReduxForm = ({ id, fields }) => {
  const formId = `form_${id}`
  const ReduxForm = reduxForm({
    form: formId,
    validate: Validator(fields)
  })(DynamicForm)

  return connect(state => ({
    values: getFormValues(formId)(state),
    syncErrs: getFormSyncErrors(formId)(state)
  }))(ReduxForm)
}

export class FormSection extends React.Component {
  static propTypes = {
    section: PropTypes.object
  }

  render() {
    console.log('FormSection ---')
    const { sectionIndex, section } = this.props
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
              <ReduxForm sectionIndex={sectionIndex} section={section} />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}


