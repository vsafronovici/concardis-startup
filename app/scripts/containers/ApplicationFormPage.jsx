import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { i18nSelector } from '../selectors/i18n-selector'
import { Loader } from '../components/Loader'
import ApplicationForm from '../components/application-form/ApplicationForm'

class ApplicationFormPage extends Component {

  render() {
    const { i18n } = this.props
    return !i18n 
        ? <Loader /> 
        : (
            <div>
              <ApplicationForm />
            </div>
          )
  }
}

const mapStateToProps = state => ({
  i18n: i18nSelector(state)
})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationFormPage)