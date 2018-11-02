import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { initData } from '../actions/package-configure-action'
import { i18nSelector } from '../selectors/i18n-selector'
import { Loader } from '../components/Loader'
import { quoteSelector, sitePageSettingSelector } from '../selectors/package-configure-selector'
import PackageConfigureSwitcher from './../components/configurator/package-configure/PackageConfiguratorSwitcher'

export class PackageConfigurePage extends React.Component {
  static propTypes = {
    initData: PropTypes.func,
    i18n: PropTypes.object,
    quote: PropTypes.object
  }

  componentWillMount() {
    this.props.initData()
  }

  showLoader = ({ quote, sitePageSettings }) =>
    ((sitePageSettings < 3) && !quote)

  render() {
    const { i18n } = this.props
    const showLoader = this.showLoader(this.props)

    return (showLoader || !i18n)
      ? <Loader />
      : (
        <div>
          <PackageConfigureSwitcher {...this.props} />
        </div>
      )
  }
}

const mapStateToProps = state => ({
  i18n: i18nSelector(state),
  quote: quoteSelector(state),
  sitePageSettings: sitePageSettingSelector(state),
})

const mapDispatchToProps = ({
  initData
})

export default connect(mapStateToProps, mapDispatchToProps)(PackageConfigurePage)

