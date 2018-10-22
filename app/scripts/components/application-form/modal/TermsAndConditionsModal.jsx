import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'antd'
import PropTypes from 'prop-types'
import { translate } from '../../../i18n/i18n'
import { i18nLangSelector } from '../../../selectors/i18n-selector'
import { TACContent } from './TACContent'

const Footer = props => (
  <div className="tac-footer">
    <div className="tac-footer-l">{translate('appForm.TAD.modal.footer.help')}</div>
    <div className="tac-footer-r">
      <Button onClick={props.onOk} disabled={props.disabled}>{translate('appForm.TAD.modal.footer.btn')}</Button>
    </div>
  </div>
)

export class TermsAndConditionsModal extends Component {

  state = {
    seen: false
  }

  componentDidMount() {

  }

  enableBtn = (enable = true) => {
    this.setState({ seen: enable })
  }

  testClose = () => {
    console.log('i closed')
    this.props.onClose()
  }


  render() {
    const { id, show, onClose, onOk, lang } = this.props

    const height = window.innerHeight - 200

    return (
      <Modal
        title={translate('appForm.TAD.modal.title')}
        visible={show}
        onCancel={this.testClose}
        footer={[<Footer key={id} onOk={onOk} disabled={!this.state.seen}/>]}
        width="90%"
        style={{ top: 50 }}
        bodyStyle={{ height , padding: 0 }}
        centered
      >
        <TACContent id={id} height={height} enableBtn={this.enableBtn} show={show} lang={lang} />
      </Modal>
    )
  }
}

TermsAndConditionsModal.propTypes = {
  lang: PropTypes.string,
  show: PropTypes.bool,
  onClose: PropTypes.func
}

const mapStateToProps = state => ({
  lang: i18nLangSelector(state)
})

export default connect(mapStateToProps)(TermsAndConditionsModal)
