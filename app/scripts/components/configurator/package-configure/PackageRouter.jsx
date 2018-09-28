import React from 'react'
import { connect } from 'react-redux'
import PackageConfigure from './PackageConfigure';
import PersonalisePackage from './PersonalisePackage';
import { routeSelector } from './../../../selectors/package-configure-selector'
import { PackageRoot } from './../../../utils/constants'

const PackageRouter = props => {

  const { route } = props

  const GetRoute = (route) => {
    switch (route) {
      case PackageRoot.ROOT1:
        return PackageConfigure
      case PackageRoot.ROOT2:
        return PersonalisePackage
      default:
        return PackageConfigure
    }
  }
  const PackageRoute = GetRoute(route)
  return(
    <div>
      <PackageRoute {...props} />
    </div>
  )
}

const mapStateToProps = state => ({
  route: routeSelector(state)
})

export default connect(mapStateToProps)(PackageRouter)