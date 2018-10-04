import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Col, Row, Steps, Icon } from 'antd'

import { ApplicationFormSteps } from '../../utils/constants'
import { sectionsSelector, currentSectionsSelector, sectionsStateSelector } from '../../selectors/application-form-selector'

const Step = Steps.Step

const Loading = <Icon type="loading" className="step_loading" />

const getStepTitle = status => {
  switch (status) {
    case ApplicationFormSteps.STEP_1:
      return 'About you'
    case ApplicationFormSteps.STEP_2:
      return 'Company legal details'
    case ApplicationFormSteps.STEP_3:
      return 'Company contact details'
    case ApplicationFormSteps.STEP_4:
      return 'Company business model'
    case ApplicationFormSteps.STEP_5:
      return 'Customise your product'
    case ApplicationFormSteps.STEP_6:
      return 'Payment details'
    default:
      return 'About you'
  }
}

//console.log(getStepTitle(ApplicationFormSteps.STEP_5))

const renderStep = ({ section }) => {
  const status = section.title
  const title = getStepTitle(section.title)
  //const status = sectionsState[section.id].status
  //const extraProps = (submitting && status === SectionStatusType.IN_PROGRESS) ? { status: 'process', icon: Loading } : {}
  
  return <Step key={section.id} title={title} />
}

export const StepsBar = (props) => {
  // const currentIdx = current >= 0 ? current : sections.length
  const { sections, current } = props
  console.log(props)
  return (
    <div className="sf-container">
      <Row>
        <Col span={20}>
          <Steps direction="vertical" size="small" current={current}>
            { sections.map(section => renderStep({ section })) }
          </Steps>
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = state => ({
  sections: sectionsSelector(state),
  current: currentSectionsSelector(state),
  sectionsState: sectionsStateSelector(state)
})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(StepsBar)
