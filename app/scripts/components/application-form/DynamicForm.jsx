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

  /*constructor(props) {
    super(props);
    this.ref = React.createRef();
  }*/

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

  componentDidMount() {
    console.log('DynamicForm componentDidMount ----')
    if (this.props.sectionState.status === SectionStatusType.IN_PROGRESS) {
      this.putFocus()
    }
  }

  componentDidUpdate() {
    console.log('DynamicForm componentDidUpdate ----')
  }

  putFocus = () => {
    setTimeout(() => {
      console.log('---putFocus', this.ref)
      this.ref && this.ref.scrollIntoView(true)
    }, 1500)
  }

  render() {
    console.log('DynamicForm:', this.props)
    const { section, fields, sectionState: {status}, valid, rValues, rSubmitting } = this.props

    if (status === SectionStatusType.WAITING) {
      return null
    }

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
      <form ref={ el => { this.ref = el } } className={this.props.sectionState.status === "IN_PROGRESS" ? "active-section" : ''}>
        {
          conditionalField && (
            <ConditionalQuestion field={fields[0]} conditionQuestion={section.conditionQuestion} readOnly={readOnly}/>
          )
        }
        {
          showOtherFields && (
            <div className="form-section">
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
                  </div>
                </Col>
              </Row>
            </div>
          )
        }
        <Row>
          <Col span={10} offset={12}>
            <Row type="flex" justify="center">
              <Col>
                {status === SectionStatusType.IN_PROGRESS && <Button className="form-btn" type="primary" onClick={this.saveForm} disabled={!valid || rSubmitting}>Next</Button>}
                {status === SectionStatusType.FINISHED && <Button className="form-btn" type="primary" onClick={this.editForm} disabled={rSubmitting}>Edit</Button>}
              </Col>
            </Row>
          </Col>
        </Row>
      </form>
    )
  }
}


