import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Step1 extends React.Component {

  static propTypes = {
    sections: PropTypes.array
  }

  render() {
    const { } = this.props
    return (
      <div>
        Step1
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(Step1)




