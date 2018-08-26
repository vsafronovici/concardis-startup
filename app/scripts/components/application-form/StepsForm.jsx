import React from 'react'
import { Steps, Row, Col, Icon } from 'antd'
import { translate } from '../../i18n/i18n'
import { SectionStatusType } from '../../utils/constants'

const Step = Steps.Step

const getStepTitle = status => {
  switch (status) {
    case SectionStatusType.FINISHED:
      return 'Finished'
    case SectionStatusType.IN_PROGRESS:
      return 'In Progress'
    default:
      return 'Waiting'
  }
}

const renderStep = ({ id, status }, submitting) => (submitting && status === SectionStatusType.IN_PROGRESS)
  ? <Step key={id} title={getStepTitle(status)} status="process" icon={<Icon type="loading" />} />
  : <Step key={id} title={getStepTitle(status)} />

export const StepsForm = ({ sections, current, submitting }) => {
  const currentIdx = current >= 0 ? current : sections.length
  console.log('ApplicationForm.StepsForm current=', { sections, current, currentIdx })
  return (
    <div className="step-form">
      <Row>
        <Col span={12}>
          <Steps current={current >= 0 ? current : sections.length} size="small">
            { sections.map(section => renderStep(section, submitting)) }
          </Steps>
        </Col>
      </Row>
    </div>
  )
}


