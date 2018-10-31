import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'

import StepsBar from './StepsBar'
import TAC from './TAC'
import SectionForm from './ChapterForm'
import { translate } from '../../i18n/i18n'

const ApplicationForm = props => (
  <Row>
    <Col span={16} offset={4}>
      <Row>
        <Col span={6} offset={1}>
          <div className="steps-pop-wrapper">
            <div className="steps-app-name">
              {translate('steps_applicationForm_title')}
            </div>
            <StepsBar />
            <TAC />
          </div>
        </Col>
        <Col span={16} offset={1}>
          <SectionForm />
        </Col>
      </Row>
    </Col>
  </Row>
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm)
