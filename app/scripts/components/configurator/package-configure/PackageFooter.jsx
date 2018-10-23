import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'antd'

import { translate } from './../../../i18n/i18n'
import { applyDiscountPayloadSelector, submittingSelector } from '../../../selectors/package-configure-selector'
import { submitQuote, confirmOffer } from '../../../actions/package-configure-action'

const PackageFooter = props => {
  const { quote: { quoteValidTill }, applyDiscountPayload, submitQuoteAction, confirmOfferAction, submitting } = props
  return (
    <div className="pkg-footer-container">
      <div className="pkg-flex-container">
        <div className="pkg-footer-date">
          {translate('configurator.packagePage.OfferValid')} {quoteValidTill}
        </div>
        <div className="pkg-flex-container">
          <div className="pkg-footer-button-back">
            <Button onClick={() => submitQuoteAction(applyDiscountPayload)} disabled={submitting}>
              {translate('configurator.packagePage.btn.saveOffer')}
            </Button>
          </div>
          <div className="pkg-footer-button-next">
            <Button onClick={() => confirmOfferAction(applyDiscountPayload)} disabled={submitting}>
              {translate('configurator.packagePage.btn.confirmOffer')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  applyDiscountPayload: applyDiscountPayloadSelector(state),
  submitting: submittingSelector(state)
})

const mapDispatchToProps = ({
  submitQuoteAction: submitQuote,
  confirmOfferAction: confirmOffer
})

PackageFooter.propTypes = {
  quote: PropTypes.object,
  applyDiscountPayload: PropTypes.object,
  submitQuoteAction: PropTypes.func,
  confirmOfferAction: PropTypes.func,
  submitting: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(PackageFooter)
