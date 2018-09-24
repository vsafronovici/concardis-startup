import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Col, Row } from 'antd'
import { goToStep } from '../../actions/configurator-action'
import ScenarioComponent from './step4-scenario/ScenarioComponent'

class Step4 extends Component { 

 render() {
  return(
   <div>
    <Row>
     <Col span={10} offset={7}>
      Step4
      <div className="scenario-wrapper">
       <ScenarioComponent scen1={true}/>
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