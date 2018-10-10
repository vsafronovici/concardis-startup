import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Col, Row, Steps, Icon } from 'antd'
import { translate } from './../../i18n/i18n'
import { ApplicationFormStepsTitles, SectionStatusType } from '../../utils/constants'
import { currentSelector, sectionsSelector, sectionsStateSelector } from '../../selectors/application-form-selector'
import { goToSection } from './../../actions/application-form-action'

const Step = Steps.Step

const Loading = <Icon type="loading" className="step_loading" />

const getStepTitle = status => {
  switch (status) {
    case ApplicationFormStepsTitles.STEP_1:
      return 'About you'
    case ApplicationFormStepsTitles.STEP_2:
      return 'Company legal details'
    case ApplicationFormStepsTitles.STEP_3:
      return 'Company contact details'
    case ApplicationFormStepsTitles.STEP_4:
      return 'Company business model'
    case ApplicationFormStepsTitles.STEP_5:
      return 'Customise your product'
    case ApplicationFormStepsTitles.STEP_6:
      return 'Payment details'
    default:
      return 'About you'
  }
}
const RenderStepLink = (props) => {
  const { title, disabled, goToSectionAction, stepIndex } = props
  return (
    <a href="javascript:void(0)" className="field-step-link" disabled={disabled} onClick={() => goToSectionAction(stepIndex)}>
      {translate(title)}
    </a>
  )
}

const renderStep = (props) => {
  const { section, stepIndex, goToSectionAction, currentIndex } = props
  const isFinishedOrProgress = (status) => {
    switch (section.status) {
      case SectionStatusType.IN_PROGRESS:
      case SectionStatusType.FINISHED:
        return true
      default:
        return false
    }
  }

  const checkStepStatus = () => {
    switch (section.status) {
      case (stepIndex === currentIndex ):
        return 'process'
      case SectionStatusType.WAITING:
        return 'wait'
      case SectionStatusType.FINISHED:
        return 'finish'
      default:
        return 'wait'
    }
  }
  const canGoToStep = isFinishedOrProgress(section.status)
  const checkNewCurrent =  ((stepIndex === currentIndex ) ? 'process' : checkStepStatus(section.status)) ||
    ((stepIndex !== currentIndex ) ? 'wait' : checkStepStatus(section.status))

  return <Step
    key={stepIndex}
    status={checkNewCurrent}
    title={<RenderStepLink {...props} disabled={!canGoToStep} title={section.title}/>}
    style={canGoToStep ? {cursor: 'pointer'} : {cursor: 'normal'}}
  />
}

export const StepsBar = (props) => {
  const { sections = [], current, goToSectionAction } = props
  return (
    <div className="sf-container">
      <Row>
        <Col span={20}>
          <Steps direction="vertical" size="small" current={current} >
            { sections && sections.map((section, index) => renderStep({ section, stepIndex: index, goToSectionAction, currentIndex: current })) }
          </Steps>
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = state => ({
  sections: sectionsSelector(state),
  current: currentSelector(state),
  sectionsState: sectionsStateSelector(state)
})

const mapDispatchToProps = ({
  goToSectionAction: goToSection
})

export default connect(mapStateToProps, mapDispatchToProps)(StepsBar)
