import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col } from 'antd'
import { FieldRow } from './FieldRow'
import { SectionStatusType, SectionType } from '../../utils/constants'
import { editSection } from '../../actions/application-form-action'
import { translate } from '../../i18n/i18n'
import { objectToArrayKeyValue } from '../../utils/function-utils'

export class ConditionalQuestion extends React.Component {
  static propTypes = {
  }

  render() {
    console.log('ConditionalQuestion:', this.props)
    const { field, conditionQuestion, readOnly } = this.props
    return (
      <div className="form-section">
        <Row>
          <Col span={10} offset={2}>
            <div className="section-title">{conditionQuestion}</div>
          </Col>
        </Row>
        <Row>
          <Col span={10} offset={12}>
            <div className="form-fields">
              <FieldRow key={field.id} field={field} readOnly={readOnly}/>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}


