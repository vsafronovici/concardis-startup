import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PackageConfigure from './PackageConfigure'
import PersonalisePackage from './PersonalisePackage'
import { routeSelector } from './../../../selectors/package-configure-selector'
import { PackageRoutes } from './../../../utils/constants'

const PackageRouter = props => {
  const { route } = props

  const GetRoute = () => {
    switch (route) {
      case PackageRoutes.ROUTE_2:
        return PackageConfigure
      case PackageRoutes.ROUTE_1:
        return PersonalisePackage
      default:
        return PackageConfigure
    }
  }
  const PackageRoute = GetRoute(route)
  return (
    <div>
      <PackageRoute {...props} />
    </div>
  )
}

const mapStateToProps = state => ({
  route: routeSelector(state)
})

PackageRouter.propTypes = {
  route: PropTypes.string
}

export default connect(mapStateToProps)(PackageRouter)
