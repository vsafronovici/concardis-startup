import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Col, Row, Steps, Icon } from 'antd'
import { translate } from './../../i18n/i18n'
import { ApplicationFormStepsTitles } from '../../utils/constants'
import { sectionsSelector, currentIndexSectionSelector, sectionsStateSelector } from '../../selectors/application-form-selector'
import VoidLink from './../common/VoidLink'
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

//console.log(getStepTitle(ApplicationFormStepsTitles.STEP_5))

const renderStep = ({ section, stepIndex, goToSectionAction, currentIndex }) => {

  const title = section.title
  //const status = sectionsState[section.id].status
  //const extraProps = (submitting && status === SectionStatusType.IN_PROGRESS) ? { status: 'process', icon: Loading } : {}
  
  return <Step key={stepIndex} title={translate(title)} style={{cursor: 'pointer'}} onClick={() => goToSectionAction({ stepIndex, currentIndex })}/>
}

export const StepsBar = (props) => {
  // const currentIdx = current >= 0 ? current : sections.length
  const { sections = [], current, goToSectionAction } = props
  console.log('CURRENT',current)
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
  current: currentIndexSectionSelector(state),
  sectionsState: sectionsStateSelector(state)
})

const mapDispatchToProps = ({
  goToSectionAction: goToSection
})

export default connect(mapStateToProps, mapDispatchToProps)(StepsBar)
