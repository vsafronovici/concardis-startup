import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Col, Row } from 'antd'
import { translate } from './../../../i18n/i18n'

const PackageDescriptionCard = ({ dateValidTill }) => (
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
          <Icon type="sync" thme="outlined" style={{ fontSize: '30px', color: '#616161' }} />
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
)

PackageDescriptionCard.propTypes = {
  dateValidTill: PropTypes.string,
}

export default PackageDescriptionCard
