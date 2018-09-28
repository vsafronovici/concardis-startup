import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'

import { translate } from './../../../i18n/i18n'
import { submitQuoteReq } from './../../../actions/package-configure-action'
import { applyDiscountPayloadSelector } from '../../../selectors/package-configure-selector'

const PackageFooter = props => {

  const { quote: { quoteValidTill }, applyDiscountPayload } = props
  return(
    <div className="pkg-footer-container">
      <div className="pkg-flex-container">
        <div className="pkg-footer-date">
          {translate('configurator.packagePage.OfferValid')} {quoteValidTill}
        </div>
       <div className="pkg-flex-container">
        <div className="pkg-footer-button-back">
          <Button onClick={() => props.submitQuoteReq(applyDiscountPayload)}>
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
  applyDiscountPayload: applyDiscountPayloadSelector(state)
})

const mapDispatchToProps = ({
  submitQuoteReq
})

export default connect(mapStateToProps, mapDispatchToProps)(PackageFooter)
