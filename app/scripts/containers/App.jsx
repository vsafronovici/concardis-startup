import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import history from './../modules/history'


export class App extends React.Component {
  static propTypes = {};

  render() {
    const { app, dispatch, user } = this.props

    return (
      <ConnectedRouter history={history}>
        <div>
          empty page
        </div>
      </ConnectedRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    
  }
}

export default connect(mapStateToProps)(App)
