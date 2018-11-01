import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button } from 'antd'
import { translate } from './../../../i18n/i18n'
import { goToExternalPage } from '../../../utils/function-utils'
import { EXTERNAL_LINKS } from '../../../utils/constants'
import { OptionCard } from '../OptionCard2'
import PackageDescriptionCard from './PackageDescriptionCard'

export const StartApplication = ({ quote, dateValidTill }) => (
  <div className="pp-container">
    <Row>
      <Col span={6} offset={4}>
        <Row>
          <Col span={24}>
            <div className="pd-container">
              <div className="pd-title">
                {translate('configurator.applicationStart.title')}
              </div>
              <div className="pd-description-1">
                {translate('configurator.applicationStart.description1')}
              </div>
              <PackageDescriptionCard dateValidTill={dateValidTill} />
              <Button onClick={() => goToExternalPage(EXTERNAL_LINKS.APPLICATION_FORM)}>
                {translate('configurator.applicationStart.btn.applicationStart')}
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

StartApplication.propTypes = {
  quote: PropTypes.object,
  dateValidTill: PropTypes.string,
}
