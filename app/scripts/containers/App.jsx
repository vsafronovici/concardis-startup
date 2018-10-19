import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { detectRootContainer } from '../utils/page-utils'
import { initPage } from './../actions/app-action'

export class App extends React.Component {
  static propTypes = {
    initPage: PropTypes.func,
  }

  componentWillMount() {
    const { Container } = detectRootContainer()
    this.Container = Container
    this.props.initPage()
  }

  render() {
    const { Container } = this

    return (
      <Container />
    )
  }
}

const mapDispatchToProps = ({
  initPage
})

export default connect(null, mapDispatchToProps)(App)
