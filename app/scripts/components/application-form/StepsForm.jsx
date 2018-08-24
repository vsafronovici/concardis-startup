import React from 'react'
import { Steps, Row, Col } from 'antd'
import { translate } from '../../i18n/i18n'

const Step = Steps.Step

const getStepTitle = status => {
  switch (status) {
    case 'FINISHED':
      return 'Finished'
    case 'IN_PROGRESS':
      return 'In Progress'
    default:
      return 'Waiting'
  }

}

export const StepsForm = ({ sections }) => {
  console.log('StepsForm sections=', sections)

  return (
    <div className="step-form">
      <Row>
        <Col span={12}>
          <Steps current={1} size="small">
            { sections.map(section => <Step key={section.id} title={getStepTitle(section.status)} />) }
          </Steps>
        </Col>
      </Row>
    </div>
  )

}


