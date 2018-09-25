import React from 'react'
import { Col, Row } from 'antd'
import ScenarioComponent from './step4-scenario/ScenarioComponent'

const Step4 = () => {

  return (
    <div>
      <Row>
        <Col span={10} offset={7}>
          <div className="scenario-wrapper">
            <ScenarioComponent />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Step4
