import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'

import section1 from './../../mock-data/application-form/mock-section1'
import SectionForm from './SectionForm'

class SectionFormWrapper extends React.Component {

  render() {
    const { section } = this.props
    return (
      <div className="section-form-wrapper">
        <SectionForm section={section} />
      </div>
    )
  }
}

SectionFormWrapper.defaultProps = {
  section: section1
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SectionFormWrapper)
