import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'antd'
import { goToStep } from '../../actions/configurator-action'
import ScenarioComponent from './step4-scenario/ScenarioComponent'

class Step4 extends Component {
  render() {
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
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = ({
  goToStep
})

export default connect(mapStateToProps, mapDispatchToProps)(Step4)
