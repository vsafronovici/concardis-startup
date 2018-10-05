import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'

import StepsBar from './StepsBar'
import SectionFormWrapper from './SectionFormWrapper'
import { FieldCheckbox } from '../common/FieldCheckbox'

const label = ' authorise - if not already done - Concardis GmbH (hereinafter referred to as "Concardis") to\n' +
  'collect payments from my account by direct debit. At the same time, I instruct my bank to\n' +
  'redeem the direct debits drawn into my account by Concardis.\n' +
  'Please note: I can request a refund of the debited amount within 8 weeks of the debit date.\n' +
  'The terms and conditions agreed with my bank shall apply. Concardis will give advance notice\n' +
  'of the direct debit with due date and amount at least 1 day before the direct debit is collected'

const ApplicationForm = props => {

  return(
    <Row>
      <Col span={16} offset={4}>
        <Row>
          <Col span={6} offset={1}>
            <div className="steps-pop-wrapper">
              <div className="steps-app-name">
                Your Application:
              </div>
              <StepsBar />
              <Button className="steps-btn">Temrs & Conditions</Button>
            </div>
          </Col>
          <Col span={13} offset={1}>
            <SectionFormWrapper />
            <FieldCheckbox value={false} onChange={() => console.log('CheckBox')} label={label}/>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm)
