import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Col, Row, Steps } from 'antd'
import { translate } from './../../i18n/i18n'
import { SectionStatusType } from '../../utils/constants'
import { currentSelector, chaptersSelector } from '../../selectors/application-form-selector'

const { Step } = Steps
const renderStep = (props) => {
  const { section, stepIndex, currentIndex } = props

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
  const checkNewCurrent =  ((stepIndex === currentIndex) ? 'process' : checkStepStatus(section.status)) ||
    ((stepIndex !== currentIndex) ? 'wait' : checkStepStatus(section.status))
  return <Step
    key={stepIndex}
    status={checkNewCurrent}
    disabled={true}
    title={<span className="field-step-link">{translate(props.section.title)}</span>}
    style={{ cursor: 'normal', lineHeight: '24px' }}
  />
}

renderStep.propTypes = {
  section: PropTypes.any,
  stepIndex: PropTypes.any,
  currentIndex: PropTypes.any
}

export const StepsBar = (props) => {
  const { sections = [], current } = props
  return (
    <div className="sf-container">
      <Row>
        <Col span={20}>
          <Steps direction="vertical" size="small" current={current} >
            { sections && [...sections.map((section, index) => renderStep({ section, stepIndex: index, currentIndex: current })),
              <Step
                key={sections.length}
                disabled={true}
                title={<span className="field-step-link">{translate('review_application_title')}</span>}
                style={{ cursor: 'normal', lineHeight: '24px' }}
              />]}
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

export default connect(mapStateToProps)(StepsBar)

StepsBar.propTypes = {
  sections: PropTypes.array,
  current: PropTypes.any
}
