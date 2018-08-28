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
    const { Condition_Answers, Condition_Question } = this.props
    const readOnly = status === SectionStatusType.FINISHED || status === SectionStatusType.PAUSED
    return (
      <div className="form-section">
        <Row>
          <Col span={8}>
            <div className="section-title">to put</div>
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={4}>
            <div>
              <Select onChange={(event) => input.onChange(event)} defaultValue={input.value} disabled={readOnly}>
                { objectToArrayKeyValue(options.items).map(entry => <Option key={entry.key} value={entry.key}>{entry.value}</Option>) }
              </Select>

            </div>
          </Col>
        </Row>
      </div>
    )
  }
}


