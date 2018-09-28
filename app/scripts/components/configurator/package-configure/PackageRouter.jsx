import React from 'react'
import { connect } from 'react-redux'
import PackageConfigure from './PackageConfigure';
import PersonalisePackage from './PersonalisePackage';
import { quoteSelector, rootRouterSelector } from './../../../selectors/package-configure-selector'
import { PackageRoot } from './../../../utils/constants'

const PackageRouter = props => {

  const { root } = props

  const GetRoot = (root) => {
    switch (root) {
      case PackageRoot.ROOT1:
        return PackageConfigure
      case PackageRoot.ROOT2:
        return PersonalisePackage
      default:
        return PackageConfigure
    }
  }
  const Route = GetRoot(root)
  return(
    <div>
      <Route {...props} />
    </div>
  )
}

const mapStateToProps = state => ({
  root: rootRouterSelector(state)
})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PackageRouter)