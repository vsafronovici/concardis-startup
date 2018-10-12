import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'

export const ReviewYourApplication = props => {

  return (
    <div className="field-review-applicaiton">
      <div className="title">
        Review your application
      </div>
      <div className="description">
        Please ensure all the details below are accurate. Once the application is submitted, it will not be possible to amend the details prior to our
        verifications. Errors and misspellings might result in the applications being rejected or delays in delivering or assisting you with your
        order.
      </div>
      <Row>
        <Col span={12}>

        </Col>
        <Col span={12}>
          <div>
            Product summary goes here
          </div>
          <Button> Terms & Conditions</Button>
          <Button>Submit applicaiton</Button>
        </Col>
      </Row>
    </div>
  )
}
