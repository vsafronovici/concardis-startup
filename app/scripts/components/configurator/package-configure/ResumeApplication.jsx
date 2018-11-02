import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button } from 'antd'
import { translate } from './../../../i18n/i18n'
import { goToExternalPage } from './../../../utils/function-utils'
import { EXTERNAL_LINKS } from '../../../utils/constants'
import { PackageAlert } from './PackageAlert'
import { OptionCard } from '../OptionCard2'

export const ResumeApplication = ({ quote, dateValidTill }) => (
  <div className="pp-container">
    <Row>
      <Col span={6} offset={4}>
        <Row>
          <Col span={24}>
            <div className="pd-container">
              <div className="pd-title">
                {translate('configurator.applicationResume.title')}
              </div>
              <div className="pd-description-1">
                {translate('configurator.applicationResume.description1')}
              </div>
              <PackageAlert dateValidTill={dateValidTill} />
              <Button onClick={() => goToExternalPage(EXTERNAL_LINKS.APPLICATION_FORM)}>
                {translate('configurator.applicationResume.btn.applicationResume')}
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

ResumeApplication.propTypes = {
  quote: PropTypes.object,
  dateValidTill: PropTypes.string,
}
