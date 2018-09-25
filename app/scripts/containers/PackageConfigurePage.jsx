import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { initData } from '../actions/configurator-action'
import { i18nSelector } from '../selectors/i18n-selector'
import { Loader } from '../components/Loader'
import PackageConfigure from '../components/configurator/package-configure/PackageConfigure'

export class PackageConfigurePage extends React.Component {
  static propTypes = {
    initData: PropTypes.func,
    i18n: PropTypes.object
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
          <PackageConfigure />
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

export default connect(mapStateToProps, mapDispatchToProps)(PackageConfigurePage)

