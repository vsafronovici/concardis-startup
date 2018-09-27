import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { initData } from '../actions/package-configure-action'
import { i18nSelector } from '../selectors/i18n-selector'
import { Loader } from '../components/Loader'
import PackageConfigure from '../components/configurator/package-configure/PackageConfigure'
import { quoteSelector } from '../selectors/package-configure-selector'
import PackageRouter from './../components/configurator/package-configure/PackageRouter'

export class PackageConfigurePage extends React.Component {
  static propTypes = {
    initData: PropTypes.func,
    i18n: PropTypes.object,
    quote: PropTypes.object
  }

  componentWillMount() {
    this.props.initData()
  }

  render() {
    const { i18n, quote } = this.props
    return !(i18n && quote)
      ? <Loader />
      : (
        <div>
          <PackageRouter quote={quote} {...this.props}/>
        </div>
      )
  }
}

const mapStateToProps = state => ({
  i18n: i18nSelector(state),
  quote: quoteSelector(state)
})

const mapDispatchToProps = ({
  initData
})

export default connect(mapStateToProps, mapDispatchToProps)(PackageConfigurePage)

