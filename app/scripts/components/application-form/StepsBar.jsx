import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Col, Row, Steps } from 'antd'
import { translate } from './../../i18n/i18n'
import { SectionStatusType } from '../../utils/constants'
import { currentSelector, chaptersSelector } from '../../selectors/application-form-selector'
import { goToSection } from './../../actions/application-form-action'

const { Step } = Steps

const RenderStepLink = (props) => {
  const { title, disabled, goToSectionAction, stepIndex } = props
  return (
    // eslint-disable-next-line no-script-url
    <a href="javascript:void(0)" className="field-step-link" disabled={disabled} onClick={() => goToSectionAction(stepIndex)}>
      {translate(title)}
    </a>
  )
}

RenderStepLink.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  goToSectionAction: PropTypes.func,
  stepIndex: PropTypes.any
}

const renderStep = (props) => {
  const { section, stepIndex, currentIndex } = props
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
      case (stepIndex === currentIndex):
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
  const checkNewCurrent =  ((stepIndex === currentIndex) ? 'process' : checkStepStatus(section.status)) ||
    ((stepIndex !== currentIndex) ? 'wait' : checkStepStatus(section.status))

  return <Step
    key={stepIndex}
    status={checkNewCurrent}
    title={<RenderStepLink {...props} disabled={!canGoToStep} title={section.title} />}
    style={canGoToStep ? { cursor: 'pointer', lineHeight: '24px' } : { cursor: 'normal', lineHeight: '24px' }}
  />
}

renderStep.propTypes = {
  section: PropTypes.any,
  stepIndex: PropTypes.any,
  currentIndex: PropTypes.any
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
  sections: chaptersSelector(state),
  current: currentSelector(state),
})

const mapDispatchToProps = ({
  goToSectionAction: goToSection
})

export default connect(mapStateToProps, mapDispatchToProps)(StepsBar)

StepsBar.propTypes = {
  goToSectionAction: PropTypes.func,
  sections: PropTypes.array,
  current: PropTypes.any
}
