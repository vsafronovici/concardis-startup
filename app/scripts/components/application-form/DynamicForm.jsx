import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col } from 'antd'
import { FieldRow } from './FieldRow'

export class DynamicForm extends React.Component {
  static propTypes = {
    section: PropTypes.object,
    saveFieldsSectionReq: PropTypes.func
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

  render() {
    console.log('Form:', this.props)
    const { section: { id, fields }, valid } = this.props
    return (
      <form>
        <div className="form-fields">
          { fields.map(field => <FieldRow key={field.id} field={field} />) }
        </div>
        <Row type="flex" justify="center">
          <Col>
            <Button className={!valid ? 'form-btn-disabled' : 'form-btn'} type="primary" onClick={this.saveForm}  disabled={!valid}>next step</Button>
          </Col>
        </Row>
      </form>
    )
  }
}


