import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col } from 'antd'
import { FieldRow } from './FieldRow'
import { SectionStatusType } from '../../utils/constants'
import { editSection } from '../../actions/application-form-action'

export class DynamicForm extends React.Component {
  static propTypes = {
    section: PropTypes.object,
    saveFieldsSectionReq: PropTypes.func,
    editSection: PropTypes.func,
  }

  saveForm = e => {
    const { section, rValues, saveFieldsSectionReq } = this.props
    const payload = {
      sectionId: section.id,
      values: rValues
    }
    console.log('saving section ', payload)
    saveFieldsSectionReq(payload)
  }

  editForm = e => {
    const { section: { id }, editSection } = this.props
    console.log('edit section ', id)
    editSection(id)
  }

  render() {
    console.log('Form:', this.props)
    const { section: { fields, status }, valid, rSubmitting } = this.props
    const readOnly = status === SectionStatusType.FINISHED
    return (
      <form>
        <div className="form-fields">
          { fields.map(field => <FieldRow key={field.id} field={field} readOnly={readOnly}/>) }
        </div>
        <Row type="flex" justify="center">
          <Col>
            {status === SectionStatusType.IN_PROGRESS && <Button className="form-btn" type="primary" onClick={this.saveForm} disabled={!valid || rSubmitting}>Next Step</Button>}
            {status === SectionStatusType.FINISHED && <Button className="form-btn" type="primary" onClick={this.editForm} disabled={rSubmitting}>Edit</Button>}
          </Col>
        </Row>
      </form>
    )
  }
}


