import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'

import { translate } from './../../../i18n/i18n'
import { goToRoot } from './../../../actions/package-configure-action'
import { ConfiguratorPageStep, PackageRoot } from './../../../utils/constants'

const PackageFooter = props => {

  const { quote: { quoteValidTill }, goToRoot } = props
  return(
    <div className="pkg-footer-container">
      <div className="pkg-flex-container">
        <div className="pkg-footer-date">
          {translate('configurator.packagePage.OfferValid')} {quoteValidTill}
        </div>
       <div className="pkg-flex-container">
        <div className="pkg-footer-button-back">
          <Button onClick={() => goToRoot(PackageRoot.ROOT2)}>
            {translate('configurator.packagePage.btn.saveOffer')}
          </Button>
        </div>
        <div className="pkg-footer-button-next">
        <Button onClick={() => goToRoot(PackageRoot.ROOT3)}>
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
  goToRoot
})

export default connect(mapStateToProps, mapDispatchToProps)(PackageFooter)