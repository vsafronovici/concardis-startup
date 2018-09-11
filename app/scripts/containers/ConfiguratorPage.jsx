import React from 'react'
import { connect } from 'react-redux'
import Configurator from '../components/configurator/Configurator'
import { initData } from '../actions/configurator-action'
import { i18nSelector } from '../selectors/i18n-selector'
import { Loader } from '../components/Loader'

export class ConfiguratorPage extends React.Component {

  static propTypes = {
  }

  componentWillMount() {
    this.props.initData()
  }

  render() {
    const { i18n } = this.props
    return !i18n
      ? <Loader />
      : (
      <div className="app__configurator">
        <Configurator />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  i18n: i18nSelector(state)
})

const mapDispatchToProps = ({
  initData
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfiguratorPage)




