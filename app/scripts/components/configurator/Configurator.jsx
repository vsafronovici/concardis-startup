import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Step1 from './Step1'

export class Configurator extends React.Component {

  static propTypes = {
    sections: PropTypes.array
  }

  render() {
    const { } = this.props
    return (
      <div>
        <Step1 />
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(Configurator)




