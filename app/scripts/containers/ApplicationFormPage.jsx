import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { i18nSelector } from '../selectors/i18n-selector'
import { Loader } from '../components/Loader'
import ApplicationForm from '../components/application-form/ApplicationForm'
import { initData } from './../actions/application-form-action'
import { chaptersSelector, finishedSelector } from '../selectors/application-form-selector'
import ReviewYourApplication from '../components/application-form/ReviewYourApplicaiton'
import ApplicationFormRouter from '../components/application-form/ApplicationFormRouter'

class ApplicationFormPage extends Component {

  componentWillMount() {
    this.props.initData()
  }

  // getPage = page => {
  //   switch (page) {
  //
  //   }
  // }

  render() {
    const { i18n, sections, finished } = this.props
    console.log('ApplicationFormPage', this.props)
    return !(i18n && sections)
        ? <Loader /> 
        : (
            <div>
              {finished ? <ApplicationFormRouter {...this.props} /> : <ApplicationForm />}
            </div>
          )
  }
}

const mapStateToProps = state => ({
  i18n: i18nSelector(state),
  sections: chaptersSelector(state),
  finished: finishedSelector(state)
})

const mapDispatchToProps = ({
  initData
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationFormPage)
