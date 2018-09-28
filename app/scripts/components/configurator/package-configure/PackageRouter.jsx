import React from 'react'
import { connect } from 'react-redux'
import PackageConfigure from './PackageConfigure';
import PersonalisePackage from './PersonalisePackage';
import { rootRouterSelector } from './../../../selectors/package-configure-selector'
import { PackageRoot } from './../../../utils/constants'

const PackageRouter = props => {

  const { root } = props

  const GetRoute = (root) => {
    switch (root) {
      case PackageRoot.ROOT1:
        return PackageConfigure
      case PackageRoot.ROOT2:
        return PersonalisePackage
      default:
        return PackageConfigure
    }
  }
  const PackageRoute = GetRoute(root)
  return(
    <div>
      <PackageRoute {...props} />
    </div>
  )
}

const mapStateToProps = state => ({
  root: rootRouterSelector(state)
})

export default connect(mapStateToProps)(PackageRouter)