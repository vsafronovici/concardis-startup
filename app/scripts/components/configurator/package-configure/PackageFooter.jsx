import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'

import { translate } from './../../../i18n/i18n'
import { goToStep } from './../../../actions/configurator-action'
import { ConfiguratorPageStep } from './../../../utils/constants'

const PackageFooter = props => {

  const { quote: { quoteValidTill }, goToStep } = props
  return(
    <div className="pkg-footer-container">
      <div className="pkg-flex-container">
        <div className="pkg-footer-date">
          {translate('configurator.packagePage.OfferValid')} {quoteValidTill}
        </div>
       <div className="pkg-flex-container">
        <div className="pkg-footer-button-back">
          <Button onClick={goToStep(ConfiguratorPageStep.STEP3)}>
            {translate('configurator.packagePage.btn.saveOffer')}
          </Button>
        </div>
        <div className="pkg-footer-button-next">
        <Button onClick={goToStep(ConfiguratorPageStep.STEP3)}>
          {translate('configurator.packagePage.btn.confirmOffer')}
        </Button>
        </div>
       </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = ({
  goToStep
})

export default connect(mapStateToProps, mapDispatchToProps)(PackageFooter)