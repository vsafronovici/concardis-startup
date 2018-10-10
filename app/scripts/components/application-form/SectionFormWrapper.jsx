import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'

import SectionForm from './SectionForm'
import { currentSectionSelector, fieldsSelector } from '../../selectors/application-form-selector'

class SectionFormWrapper extends React.Component {

  render() {
    const { section, fields } = this.props
    return (
      <div className="section-form-wrapper">
        <SectionForm section={section} fields={fields} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  section: currentSectionSelector(state),
  fields: fieldsSelector(state),
})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SectionFormWrapper)
