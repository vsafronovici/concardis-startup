import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'
import { translate } from '../../i18n/i18n'
import { closeTACModal, submit, confirm, setReadyForSubmit } from '../../actions/application-form-action'
import ReviewChapters from './ReviewChapters'
import {quoteReviewSelector, tacSelector} from '../../selectors/application-form-selector'
import TermsAndConditionsModal from './modal/TermsAndConditionsModal'
import { OptionCard } from "../configurator/OptionCard";

const ReviewYourApplication = props => {
  const { quote } = props
  const {
    submitAction,
    TAC: { show },
    closeTACModalAction,
    confirmationAction,
    setReadyForSubmitAction,
  } = props

  const onSubmit = () => {
    setReadyForSubmitAction()
    submitAction()
  }
  console.log('OPTION_PROPS', props)
  return (
    <div className="review-container">
      <Row>
        <Col span={16} offset={4}>
          <div className="field-review-applicaiton">
            <div className="title">
              {translate('appForm.reviewAppPage.title')}
            </div>
            <div className="description">
              {translate('appForm.reviewAppPage.description')}
            </div>
            <Row>
              <Col span={12}>
                <ReviewChapters />
              </Col>
              <Col span={12}>
                <div className="bundle-container">
                  <div className="quote-container">
                    {quote && <OptionCard
                      includedItems={quote.includedItems}
                      description={quote.description}
                      name={quote.name}
                      features={quote.features} />}
                  </div>
                  <div className="review-buttons-container">
                    <Button onClick={onSubmit}>{translate('btn_applicationForm_submitApplication')}</Button>
                    <Button onClick={submitAction}>{translate('btn_applicationForm_termsAndConditions')}</Button>
                  </div>
                  <TermsAndConditionsModal id="TAC_2" show={show} onClose={closeTACModalAction} onOk={confirmationAction} />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => ({
  TAC: tacSelector(state),
  quote: quoteReviewSelector(state)
})

const mapDispatchToProps = ({
  submitAction: submit,
  confirmationAction: confirm,
  setReadyForSubmitAction: setReadyForSubmit,
  closeTACModalAction: closeTACModal,
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewYourApplication)

ReviewYourApplication.propTypes = {
  submitAction: PropTypes.func,
  TAC: PropTypes.any,
  closeTACModalAction: PropTypes.func,
  confirmationAction: PropTypes.func,
  setReadyForSubmitAction: PropTypes.func
}
