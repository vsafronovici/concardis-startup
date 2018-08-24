import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class App extends React.Component {
  static propTypes = {};

  render() {

    return (
      <div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(App)
