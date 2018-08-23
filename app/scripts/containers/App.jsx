import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MainHeader from '../components/MainHeader';
import MainContent from '../components/MainContent';
import MainFooter from '../components/MainFooter';

export class App extends React.Component {
  static propTypes = {};

  render() {

    return (
      <div className="app">
        <MainHeader />
        <MainContent />
        <MainFooter />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(App)
