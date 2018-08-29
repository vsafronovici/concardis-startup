import React from 'react'
import { Steps, Row, Col, Icon } from 'antd'
import { translate } from '../../i18n/i18n'
import { SectionStatusType } from '../../utils/constants'
import {
  sectionsStateSelector, currentSectionsSelector,
} from '../../selectors/application-form-selector'
import { connect } from 'react-redux'

const Step = Steps.Step

const Loading = <Icon type="loading" className="step_loading"  />

const getStepTitle = status => {
  switch (status) {
    case SectionStatusType.FINISHED:
      return 'Finished'
    case SectionStatusType.IN_PROGRESS:
      return 'In Progress'
    case SectionStatusType.PAUSED:
      return 'Paused'
    default:
      return 'Waiting'
  }
}

const renderStep = ({ section, sectionsState, submitting }) => {
  const status = sectionsState[section.id].status
  const extraProps = (submitting && status === SectionStatusType.IN_PROGRESS) ? { status: 'process', icon: Loading } : {}

  return <Step key={section.id} title={getStepTitle(status)} {...extraProps} />
}

export const StepsForm = ({ sections, sectionsState, current, submitting }) => {
  const currentIdx = current >= 0 ? current : sections.length
  console.log('ApplicationForm.StepsForm current=', { sections, current, currentIdx })
  return (
    <div className="step-form">
      <Row>
        <Col span={20} offset={2}>
          <Steps current={current >= 0 ? current : sections.length} size="small">
            { sections.map(section => renderStep({ section, sectionsState, submitting })) }
          </Steps>
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = state => ({
  current: currentSectionsSelector(state),
  sectionsState: sectionsStateSelector(state),
})

export default connect(mapStateToProps)(StepsForm)



