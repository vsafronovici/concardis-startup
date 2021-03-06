import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import { stepSelector } from '../../selectors/configurator-selector'
import { ConfiguratorPageStep } from '../../utils/constants'

export class Configurator extends React.Component {
  static propTypes = {
    step: PropTypes.number
  }

  getStep = () => {
    switch (this.props.step) {
      case ConfiguratorPageStep.STEP1:
        return Step1
      case ConfiguratorPageStep.STEP2:
        return Step2
      case ConfiguratorPageStep.STEP3:
        return Step3
      default:
        return Step1
    }
  }

  render() {
    const { } = this.props
    const Step = this.getStep()
    return (
      <div className="">
        <Step />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  step: stepSelector(state)
})

export default connect(mapStateToProps)(Configurator)

