import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'
import { OptionCard } from '../OptionCard2'
import { translate } from './../../../i18n/i18n'
import { goToRoute } from './../../../actions/package-configure-action'
import { PackageRoutes } from './../../../utils/constants'
import PackageDescriptionCard from './PackageDescriptionCard'

const FEATURES = [
  'configurator.packagePersonalise.list.Feature1',
  'configurator.packagePersonalise.list.Feature2',
  'configurator.packagePersonalise.list.Feature3',
]

const PersonalisePackage = ({ quote, goToRouteAction }) => (
  <div className="pp-container">
    <Row>
      <Col span={6} offset={4}>
        <Row>
          <Col span={24}>
            <div className="pd-container">
              <div className="pd-title">
                {translate('configurator.packagePersonalise.title')}
              </div>
              <div className="pd-description-1">
                {translate('configurator.packagePersonalise.description1')}
              </div>
              <div className="pd-description-2">
                {translate('configurator.packagePersonalise.description2')}
              </div>
              <div className="pd-list-container">
                <ul className="pd-list">
                  {FEATURES.map((feature, index) => (
                    <li className="pd-list-item" key={index}>
                      {translate(feature)}
                    </li>
                  ))}
                </ul>
              </div>
              <PackageDescriptionCard />
              <Button onClick={() => goToRouteAction(PackageRoutes.ROUTE_2)}>
                {translate('configurator.packagePersonalise.btn.packageApply')}
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
      <Col span={8} offset={1}>
        <OptionCard quote={quote} />
      </Col>
    </Row>
  </div>
)

const mapDispatchToProps = ({
  goToRouteAction: goToRoute
})

PersonalisePackage.propTypes = {
  goToRouteAction: PropTypes.func,
  quote: PropTypes.object,
}

export default connect(null, mapDispatchToProps)(PersonalisePackage)
