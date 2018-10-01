import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'antd'

import { translate } from './../../../i18n/i18n'
import { submitQuoteReq } from './../../../actions/package-configure-action'
import { applyDiscountPayloadSelector, submittingSelector } from '../../../selectors/package-configure-selector'

const PackageFooter = props => {
  const { quote: { quoteValidTill }, applyDiscountPayload, submitting } = props
  return (
    <div className="pkg-footer-container">
      <div className="pkg-flex-container">
        <div className="pkg-footer-date">
          {translate('configurator.packagePage.OfferValid')} {quoteValidTill}
        </div>
        <div className="pkg-flex-container">
          <div className="pkg-footer-button-back">
            <Button onClick={() => props.submitQuoteReq(applyDiscountPayload)} disabled={submitting}>
              {translate('configurator.packagePage.btn.saveOffer')}
            </Button>
          </div>
          <div className="pkg-footer-button-next">
            <Button>
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
  submitQuoteReq
})

PackageFooter.propTypes = {
  quote: PropTypes.object,
  applyDiscountPayload: PropTypes.object,
  submitQuoteReq: PropTypes.func,
  submitting: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(PackageFooter)
