import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'
import { translate } from '../../i18n/i18n'
import { agreeTAC, closeTACModal, openTACModal, submitReq, submit, confirm, setReadyForSubmit } from '../../actions/application-form-action'
import ReviewChapters from './ReviewChapters'
import { tacSelector } from '../../selectors/application-form-selector'
import TermsAndConditionsModal from './modal/TermsAndConditionsModal'

const ReviewYourApplication = props => {
  const {
    submitAction,
    TAC: { show },
    openTACModalAction,
    closeTACModalAction,
    agreeTACAction,
    confirmationAction,
    setReadyForSubmitAction,
  } = props

  const onSubmit = () => {
    setReadyForSubmitAction()
    submitAction()
  }

  return (
    <div className="review-container">
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
                <ReviewChapters />
              </Col>
              <Col span={12}>
                <div className="review-buttons-container">
                  <Button onClick={onSubmit}>{translate('btn_applicationForm_submitApplication')}</Button>
                  <Button onClick={submitAction}>{translate('btn_applicationForm_termsAndConditions')}</Button>
                </div>
                <TermsAndConditionsModal id="TAC_2" show={show} onClose={closeTACModalAction} onOk={confirmationAction} />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => ({
  TAC: tacSelector(state)
})

const mapDispatchToProps = ({
  submitAction: submit,
  confirmationAction: confirm,
  setReadyForSubmitAction: setReadyForSubmit,
  openTACModalAction: openTACModal,
  closeTACModalAction: closeTACModal,
  agreeTACAction: agreeTAC
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewYourApplication)
