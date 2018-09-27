import React from 'react'
import { connect } from 'react-redux'
import PackageConfigure from './PackageConfigure';

const PackageRouter = props => {

  const getRoot = root => {
    switch (root) {
      default:
        return <PackageConfigure />
    }
  }

  return(
    <div>
      {getRoot}
    </div>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PackageRouter)