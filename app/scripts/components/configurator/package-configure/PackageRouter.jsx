import React from 'react'
import { connect } from 'react-redux'
import PackageConfigure from './PackageConfigure';
import PersonalisePackage from './PersonalisePackage';
import { quoteSelector, rootRouterSelector } from './../../../selectors/package-configure-selector'

const PackageRouter = props => {

  const { quote, root } = props

  const GetRoot = (root) => {
    switch (root) {
      case PackageConfigure.ROOT1:
        return <PackageConfigure {...props}/>
      case PackageConfigure.ROOT2:
        return <PersonalisePackage {...props}/>
      default:
        return <PackageConfigure {...props}/>
    }
  }
  
  return(
    <div>
      {GetRoot(root)}
    </div>
  )
}

const mapStateToProps = state => ({
  quote: quoteSelector(state),
  root: rootRouterSelector(state)
})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PackageRouter)