import React from 'react'
import { connect } from 'react-redux'
import { quoteValidDateTillSelector } from '../../../selectors/package-configure-selector'
import { ResumeApplication } from './ResumeApplication'
import { StartApplication } from './StartApplication'
import { ExpiredQuote } from './ExpiredQuote'
import PackageRouter from './PackageRouter'

const PackageConfigureSwitcher = props => {
  const { sitePageSettings } = props

  const renderConfigurePages = () => {
    switch (sitePageSettings) {
      case 0: return <PackageRouter {...props} />
      case 1: return <StartApplication {...props} />
      case 2: return <ResumeApplication {...props} />
      case 3: return <ExpiredQuote />
      default: return null
    }
  }

  return renderConfigurePages()
}

const mapStateToProps = state => ({
  dateValidTill: quoteValidDateTillSelector(state),
})

export default connect(mapStateToProps)(PackageConfigureSwitcher)
