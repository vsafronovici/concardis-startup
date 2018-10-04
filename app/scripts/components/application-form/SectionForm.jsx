import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'antd'

import { ReduxDynamicForm } from './ReduxDynamicForm'

class SectionForm extends React.Component {

  render() {
    const { section } = this.props
    console.log('SectionForm', this.props)

    return (
      <div className="section-form">
        <h2>{ section.title }</h2>
        <h3>{ section.help }</h3>
        <div>
          <ReduxDynamicForm section={section} />
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SectionForm)
