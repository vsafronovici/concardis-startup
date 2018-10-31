import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Modal } from 'antd'
import { Loader } from '../../Loader'
import { request } from './../../../modules/client'
import { NodeProcess } from '../../../utils/constants'
import { translate } from '../../../i18n/i18n'
import { i18nLangSelector } from '../../../selectors/i18n-selector'

export class TermsAndConditions extends Component {
  static propTypes = {
    lang: PropTypes.string,
    show: PropTypes.bool,
    onClose: PropTypes.func,
  }

  componentDidMount() {
    if (process.env.NODE_ENV === NodeProcess.DEV) {
      this.content = (
        <div>
          <p>Some contents...</p>
        </div>
      )
    } else {
      request(window.configSettings.XHRs.TAD[this.props.lang]).then(res => {
        this.content = <div dangerouslySetInnerHTML={{ __html: res.data }} />
      })
    }
  }

  render() {
    const { show, onClose } = this.props
    const { content } = this

    return (
      <Modal
        title={translate('gdpr.title')}
        visible={show}
        onCancel={onClose}
        footer={null}
        width="90%"
        bodyStyle={{ height: 700, overflowY: 'scroll' }}
      >
        { content || <Loader /> }
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  lang: i18nLangSelector(state)
})

export default connect(mapStateToProps)(TermsAndConditions)
