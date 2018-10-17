import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'
import { translate } from '../../i18n/i18n'
import { submitReq } from '../../actions/application-form-action'

const ReviewYourApplication = props => {
  const { submitReqAction } = props
  return (
    <Row>
      <Col span={16} offset={4}>
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
              <Button onClick={submitReqAction}>{translate('btn_applicationForm_submitApplication')}</Button>
              <Button>{translate('btn_applicationForm_termsAndConditions')}</Button>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = ({
  submitReqAction: submitReq
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewYourApplication)
