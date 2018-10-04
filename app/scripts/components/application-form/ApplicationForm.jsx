import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'
import BoxedRadioBtns from './../../components/common/BoxedRadioBtns'
import StepsBar from './StepsBar'
import { options } from './../../mock-data/application-form/mock-radio-group'

const ApplicationForm = props => {

  return(
    <Row>
      <Col span={16} offset={4}>
        <Row>
          <Col span={6} offset={1}>
            <div className="steps-pop-wrapper">
              <div className="steps-app-name">
                Your Application:
              </div>
              <StepsBar />
              <Button className="steps-btn">Terms & Conditions</Button>
            </div>
          </Col>
          <Col span={13} offset={1}>
            <BoxedRadioBtns name="radio_groups" type="radio" options={options}/> 
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm)
