import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'

import StepsForm from '../application-form/StepsForm'

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
              <StepsForm />
              <Button className="steps-btn">Temrs & Conditions</Button>
            </div>
          </Col>
          <Col span={13} offset={1}>
            Forms
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