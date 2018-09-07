import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Step1 from './Step1'
import Step2 from './Step2'

export class Configurator extends React.Component {

  static propTypes = {
  }

  getStep = () => {
    return Step2
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
})

export default connect(mapStateToProps)(Configurator)




