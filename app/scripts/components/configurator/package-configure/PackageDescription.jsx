import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button, Icon } from 'antd'
import { translate } from './../../../i18n/i18n'
import { goToRoute } from './../../../actions/package-configure-action'
import { PackageRoutes } from './../../../utils/constants'

const PackageDescription = props => {
  const FEATURES = [
    translate('configurator.packagePersonalise.list.Feature1'),
    translate('configurator.packagePersonalise.list.Feature2'),
    translate('configurator.packagePersonalise.list.Feature3')
  ]
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
              {FEATURES.map((feature, index) => {
                return (
                  <li className="pd-list-item" key={index}>
                    {feature}
                  </li>
                )
              })}
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
                </div>
              </Col>
            </Row>
          </div>
          <Button onClick={() => props.goToRoute(PackageRoutes.ROUTE_2)}>
            {translate('configurator.packagePersonalise.btn.packageApply')}
          </Button>
        </div>
      </Col>
    </Row>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = ({
  goToRoute
})

export default connect(mapStateToProps, mapDispatchToProps)(PackageDescription)
