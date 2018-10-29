import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { i18nSelector } from '../selectors/i18n-selector'
import { Loader } from '../components/Loader'
import ApplicationForm from '../components/application-form/ApplicationForm'
import { initData } from './../actions/application-form-action'
import { chaptersSelector, reviewModeSelector } from '../selectors/application-form-selector'
import ReviewApplicationFormRouter from '../components/application-form/ReviewApplicationFormRouter'

class ApplicationFormPage extends Component {
  componentWillMount() {
    this.props.initData()
  }

  render() {
    const { i18n, chapters, reviewMode } = this.props
    return !(i18n && chapters)
      ? <Loader />
      : (
        <div>
          {reviewMode ? <ReviewApplicationFormRouter {...this.props} /> : <ApplicationForm />}
        </div>
      )
  }
}

const mapStateToProps = state => ({
  i18n: i18nSelector(state),
  chapters: chaptersSelector(state),
  reviewMode: reviewModeSelector(state)
})

const mapDispatchToProps = ({
  initData
})

ApplicationFormPage.propTypes = {
  i18n: PropTypes.any,
  chapters: PropTypes.array,
  reviewMode: PropTypes.bool,
  initData: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationFormPage)
