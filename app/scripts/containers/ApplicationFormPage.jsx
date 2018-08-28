import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { applicationFormLoadedSelector  } from '../selectors/application-form-selector'
import { i18nSelector } from '../selectors/i18n-selector'
import { initData } from '../actions/application-form-action'
import ApplicationForm from '../components/application-form/ApplicationForm'
import { Loader } from '../components/Loader'
import { Col, Row } from 'antd'

export class ApplicationFormPage extends React.Component {
  static propTypes = {
    i18n: PropTypes.object,
    applicationFormLoaded: PropTypes.bool,
    initData: PropTypes.func
  }

  componentWillMount() {
    this.props.initData()
  }

  render() {
    console.log('ApplicationFormPage render props', this.props)

    const { i18n, applicationFormLoaded } = this.props
    return (
      <Loader loading={!i18n || !applicationFormLoaded}>
        <div className="application-form-bgc">
          <Row>
            <Col lg={{span: 16, offset: 4}}>
              <ApplicationForm />
            </Col>
          </Row>
        </div>
      </Loader>
    )
  }
}

const mapStateToProps = state => ({
  i18n: i18nSelector(state),
  applicationFormLoaded: applicationFormLoadedSelector(state)
})

const mapDispatchToProps = ({
  initData
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationFormPage)
