import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { applicationFormSelector } from '../selectors/application-form-selector'
import { i18nSelector } from '../selectors/i18n-selector'
import { initData } from '../actions/application-form-action'
import { ApplicationForm } from '../components/application-form/ApplicationForm'
import { Loader } from '../components/Loader'

export class ApplicationFormPage extends React.Component {
  static propTypes = {
    i18n: PropTypes.object,
    applicationForm: PropTypes.object,
    initData: PropTypes.func
  }

  componentWillMount() {
    this.props.initData()
  }

  render() {
    console.log('ApplicationFormPage render props', this.props)

    const { i18n, applicationForm: { loaded, sections} } = this.props
    return (
      <Loader loading={!i18n || !loaded}>
        <ApplicationForm  sections={sections} />
      </Loader>
    )
  }
}

const mapStateToProps = state => ({
  i18n: i18nSelector(state),
  applicationForm: applicationFormSelector(state)
})

const mapDispatchToProps = ({
  initData
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationFormPage)
