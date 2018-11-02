import React from 'react'
import { Row, Col, Button } from 'antd'
import { translate } from './../../../i18n/i18n'

export const ExpiredQuote = () => (
  <div className="pp-container">
    <Row>
      <Col span={6} offset={4}>
        <Row>
          <Col span={24}>
            <div className="pd-container">
              <div className="pd-title">
                {translate('configurator.quoteExpired.title')}
              </div>
              <div className="pd-description-1">
                {translate('configurator.quoteExpired.description1')}
              </div>
              <div className="pd-description-2">
                {translate('configurator.quoteExpired.description2')}
              </div>
              <Button onClick={() => console.log('quote has been expired')}>
                {translate('configurator.quoteExpired.btn.getQuote')}
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
)
