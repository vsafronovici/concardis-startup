import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Col, Row, Steps, Icon } from 'antd'

import { StepsBar } from '../../utils/constants'
import { sections } from './../../mock-data/application-form/mock-steps-bar'

const Step = Steps.Step

const Loading = <Icon type="loading" className="step_loading" />

const getStepTitle = status => {
  switch (status) {
    case StepsBar.STEP_1:
      return 'About you'
    case StepsBar.STEP_2:
      return 'Company legal details'
    case StepsBar.STEP_3:
      return 'Company contact details'
    case StepsBar.STEP_4:
      return 'Company business model'
    case StepsBar.STEP_5:
      return 'Customise your product'
    case StepsBar.STEP_6:
      return 'Payment details'
    default:
      return 'About you'
  }
}

//console.log(getStepTitle(StepsBar.STEP_5))

const renderStep = ({ section }) => {
  const status = section.title
  const title = getStepTitle(section.title)
  //const status = sectionsState[section.id].status
  //const extraProps = (submitting && status === SectionStatusType.IN_PROGRESS) ? { status: 'process', icon: Loading } : {}
  
  return <Step key={section.id} title={title}  />
}

export const StepsForm = () => {
  // const currentIdx = current >= 0 ? current : sections.length
  return (
    <div className="sf-container">
      <Row>
        <Col span={20}>
          <Steps direction="vertical" size="small">
            { sections.map(section => renderStep({ section })) }
          </Steps>
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(StepsForm)