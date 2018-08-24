import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import history from './../modules/history'
import { detectRootContainer } from '../utils/page-utils'
import { initPage } from './../actions/app-action'

export class App extends React.Component {
  static propTypes = {};

  render() {

    
    const Container = this.Container

    return (
      <ConnectedRouter history={history}>
        <div>
          <Container />
        </div>
      </ConnectedRouter>
    )
  }
}

const mapDispatchToProps = ({
  initPage
})

export default connect(mapStateToProps)(App)
