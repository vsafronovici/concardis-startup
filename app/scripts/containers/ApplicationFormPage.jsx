import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { i18nSelector } from '../selectors/i18n-selector'
import { Loader } from '../components/Loader'

class ApplicationFormPage extends Component {

  render() {
    const { i18n } = this.props
    return (
      <div>
        ApplicationFormPage Container
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