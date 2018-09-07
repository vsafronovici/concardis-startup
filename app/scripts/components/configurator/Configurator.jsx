import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Step1 from './Step1'
import Step2 from './Step2'
import { Row, Col } from 'antd'

export class Configurator extends React.Component {

  static propTypes = {
  }

  getStep = () => {
    return Step1
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




