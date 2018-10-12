import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { i18nSelector } from '../selectors/i18n-selector'
import { Loader } from '../components/Loader'
import ApplicationForm from '../components/application-form/ApplicationForm'
import { initData } from './../actions/application-form-action'
import { sectionsSelector, finishedSelector } from '../selectors/application-form-selector'
import { ReviewYourApplication } from '../components/application-form/ReviewYourApplicaiton'

class ApplicationFormPage extends Component {

  componentWillMount() {
    this.props.initData()
  }

  render() {
    const { i18n, sections, finished } = this.props
    return !(i18n && sections)
        ? <Loader /> 
        : (
            <div>
              {finished ? <ReviewYourApplication/> : <ApplicationForm />}
            </div>
          )
  }
}

const mapStateToProps = state => ({
  i18n: i18nSelector(state),
  sections: sectionsSelector(state),
  finished: finishedSelector(state)
})

const mapDispatchToProps = ({
  initData
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationFormPage)
