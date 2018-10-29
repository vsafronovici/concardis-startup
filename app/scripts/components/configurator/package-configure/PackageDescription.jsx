import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button, Icon } from 'antd'
import moment from 'moment'; 
import { translate } from './../../../i18n/i18n'
import { goToRoute } from './../../../actions/package-configure-action'
import { quoteValidDateTillSelector, quoteFeaturesSelector } from '../../../selectors/package-configure-selector'
import { PackageRoutes } from './../../../utils/constants'

const PackageDescription = props => {
  const { features, dateValidTill, goToRoute } = props
  return (
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
              {features.map((feature, index) => (
                <li className="pd-list-item" key={index}>
                  {feature.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="pd-cards-container">
            <Row>
              <Col span={8}>
                <div className="pd-card-title">
                  <Icon type="clock-circle" theme="outlined" style={{ fontSize: '30px', color: '#616161' }} />
                </div>
                <div className="pd-card-description">
                  {translate(features[0].description)}
                </div>
              </Col>
              <Col span={8}>
                <div className="pd-card-title">
                  <Icon type="sync" theme="outlined" style={{ fontSize: '30px', color: '#616161' }} />
                </div>
                <div className="pd-card-description">
                  {translate(features[1].description)}
                </div>
              </Col>
              <Col span={8}>
                <div className="pd-card-title">
                  <Icon type="exclamation-circle" theme="outlined" style={{ fontSize: '30px', color: '#616161' }} />
                </div>
                <div className="pd-card-description">
                  {translate(features[2].description)}
                  <div>{dateValidTill}</div>
                </div>
              </Col>
            </Row>
          </div>
          <Button onClick={() => goToRoute(PackageRoutes.ROUTE_2)}>
            {translate('configurator.packagePersonalise.btn.packageApply')}
          </Button>
        </div>
      </Col>
    </Row>
  )
}

const mapStateToProps = state => ({
  dateValidTill: quoteValidDateTillSelector(state),
  features: quoteFeaturesSelector(state),
})

const mapDispatchToProps = ({
  goToRoute
})

PackageDescription.propTypes = {
  goToRoute: PropTypes.func,
  dateValidTill: PropTypes.string,
  features: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(PackageDescription)
