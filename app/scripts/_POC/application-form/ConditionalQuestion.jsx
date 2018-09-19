import React from 'react'
import { Row, Col } from 'antd'
import { FieldRow } from './FieldRow'
import { translate } from '../../i18n/i18n'

export class ConditionalQuestion extends React.Component {
  static propTypes = {
  }

  render() {
    const { field, conditionQuestion, readOnly } = this.props
    return (
      <div className="form-section">
        <Row>
          <Col span={10} offset={2}>
            <div className="section-title">{translate(conditionQuestion)}</div>
          </Col>
        </Row>
        <Row>
          <Col span={10} offset={12}>
            <div className="form-fields">
              <FieldRow key={field.id} field={field} readOnly={readOnly} />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

