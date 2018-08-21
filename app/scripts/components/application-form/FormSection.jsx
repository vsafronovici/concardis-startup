import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col } from 'antd'
import { translate } from './../../i18n/i18n'
import { FieldRow } from './FieldRow'
import { reduxForm } from 'redux-form'

const Form = ({ fields }) => (
  <form>
    { fields.map(field => <FieldRow key={field.id} field={field} />) }
  </form>
)

const createValidation = fields => values => {
  const errors = {}

  // TODO get validation rules from fields
  if (!values.f1) {
    errors.f1 = 'Required'
  }

  return errors
}


const createReduxForm = (formId, fields) => reduxForm({
  form: `form_${formId}`,
  validate: createValidation(fields)
})(Form)


export class FormSection extends React.Component {
  static propTypes = {
    section: PropTypes.object
  }

  saveForm = sectionId => e => {
    console.log('saving section ', sectionId)
  }

  prevStep = sectionIndex => e => {
    console.log('prevStep ', sectionIndex)
  }

  render() {
    const { index, section: { id, title, fields } } = this.props
    const ReduxForm = createReduxForm(id, fields)
    return (
      <div id={'form_section' + id} className="form-section">
        <Row>
          <Col span={8}>
            <div className="section-title">{translate(title)}</div>
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={4}>
            <div className="form-fields">
              <ReduxForm fields={fields} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={4}>
            <Row type="flex" justify="center">
              <Col>
                { index > 0 && <Button className="form-btn" type="primary" onClick={this.prevStep(index)}>Previous Step</Button> }
                <Button className="form-btn" type="primary" onClick={this.saveForm(id)}>Next Step</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}


