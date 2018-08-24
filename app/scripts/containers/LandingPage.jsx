import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import history from './../modules/history'
import ReactDemoPage from "../components/ReactDemoPage";


export class LandingPage extends React.Component {
  static propTypes = {};

  render() {
    return (
      <h1>Landing page</h1>
    )
  }
}

function mapStateToProps(state) {
  return {
    
  }
}

export default connect(mapStateToProps)(LandingPage)
