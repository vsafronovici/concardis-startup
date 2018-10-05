import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'

import StepsBar from './StepsBar'
import SectionFormWrapper from './SectionFormWrapper'
import { VerticalRadioBtns } from '../common/VerticalRadioBtns'
import { verticalRadioBtnsMock} from "../../mock-data/application-form/mock-radio-group";
import { BoxedCheckbox} from '../common/BoxedCheckbox'

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
            <VerticalRadioBtns options={verticalRadioBtnsMock} onChange={() => console.log('vertical radio group')} title='Your role in the company' />
            <BoxedCheckbox title="title" description="description" onChange={() => console.log('checkbox')}/>
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
