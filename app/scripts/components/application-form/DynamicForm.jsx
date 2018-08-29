import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col } from 'antd'
import { FieldRow } from './FieldRow'
import { SectionStatusType, SectionType } from '../../utils/constants'
import { editSection } from '../../actions/application-form-action'
import { translate } from '../../i18n/i18n'
import { ConditionalQuestion } from './ConditionalQuestion'

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

  /*getFieldsToDisplay = () => {
    const { section, fields, sectionState: {status}, valid, rValues, rSubmitting } = this.props

    if (section.type === SectionType.SIMPLE) {
      return fields
    }

    const { Condition_Answers } =
  }*/

  render() {
    console.log('DynamicForm:', this.props)
    const { section, fields, sectionState: {status}, valid, rValues, rSubmitting } = this.props
    const readOnly = status === SectionStatusType.FINISHED || status === SectionStatusType.PAUSED

    let conditionalField, otherFields
    let showOtherFields = true
    if (section.type === SectionType.CONDITIONAL) {
      [conditionalField, ...otherFields] = fields
      if (rValues) {
        showOtherFields = rValues[conditionalField.name] === section.conditionAnswer
      }
    } else {
      otherFields = [...fields]
    }

    return (
      <form>
        {
          conditionalField && (
            <ConditionalQuestion field={fields[0]} conditionQuestion={section.conditionQuestion} readOnly={readOnly}/>
          )
        }
        {
          showOtherFields && (
            <div className="form-section" tabindex="0">
              <Row>
                <Col span={10} offset={2}>
                  <div className="section-title">{translate(section.title)}</div>
                </Col>
              </Row>
              <Row>
                <Col span={10} offset={12}>
                  <div>
                    <div className="form-fields">
                      { otherFields.map(field => <FieldRow key={field.id} field={field} readOnly={readOnly}/>) }
                    </div>
                    <Row type="flex" justify="center">
                      <Col>
                        {status === SectionStatusType.IN_PROGRESS && <Button className="form-btn" type="primary" onClick={this.saveForm} disabled={!valid || rSubmitting}>Next Step</Button>}
                        {status === SectionStatusType.FINISHED && <Button className="form-btn" type="primary" onClick={this.editForm} disabled={rSubmitting}>Edit</Button>}
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>

          )

        }
      </form>
    )
  }
}


