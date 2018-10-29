import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button, Icon } from 'antd'
import { translate } from './../../../i18n/i18n'
import { goToRoute } from './../../../actions/package-configure-action'
import { quoteValidDateTillSelector, quoteFeaturesSelector } from '../../../selectors/package-configure-selector'
import { PackageRoutes } from './../../../utils/constants'

const FEATURES = [
  'configurator.packagePersonalise.list.Feature1',
  'configurator.packagePersonalise.list.Feature2',
  'configurator.packagePersonalise.list.Feature3',
]

const PackageDescription = props => {
  const { dateValidTill, goToRoute } = props

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
              {FEATURES.map((feature, index) => (
                <li className="pd-list-item" key={index}>
                {translate(feature)}
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
                  {translate('configurator.packagePersonalise.card.description1')}
                </div>
              </Col>
              <Col span={8}>
                <div className="pd-card-title">
                  <Icon type="sync" theme="outlined" style={{ fontSize: '30px', color: '#616161' }} />
                </div>
                <div className="pd-card-description">
                  {translate('configurator.packagePersonalise.card.description2')}
                </div>
              </Col>
              <Col span={8}>
                <div className="pd-card-title">
                  <Icon type="exclamation-circle" theme="outlined" style={{ fontSize: '30px', color: '#616161' }} />
                </div>
                <div className="pd-card-description">
                  {translate('configurator.packagePersonalise.card.description3')}
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
})

const mapDispatchToProps = ({
  goToRoute
})

PackageDescription.propTypes = {
  goToRoute: PropTypes.func,
  dateValidTill: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(PackageDescription)
