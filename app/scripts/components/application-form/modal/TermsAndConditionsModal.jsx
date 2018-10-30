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

Footer.propTypes = {
  onOk: PropTypes.func,
  disabled: PropTypes.bool,
}

export class TermsAndConditionsModal extends Component {
  state = {
    seen: false
  }

  static propTypes = {
    id: PropTypes.string,
    onOk: PropTypes.func,
    lang: PropTypes.string,
    show: PropTypes.bool,
    onClose: PropTypes.func
  }

  enableBtn = () => {
    this.setState({ seen: true })
  }

  render() {
    const { id, show, onClose, onOk, lang } = this.props

    const height = window.innerHeight - 200

    return (
      <Modal
        title={translate('appForm.TAD.modal.title')}
        visible={show}
        onCancel={onClose}
        footer={[<Footer key={id} onOk={onOk} disabled={!this.state.seen} />]}
        width="90%"
        style={{ top: 50 }}
        bodyStyle={{ height, padding: 0 }}
        centered
      >
        <TACContent
          id={id} height={height} enableBtn={this.enableBtn} lang={lang}
          show={show}
        />
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  lang: i18nLangSelector(state)
})

export default connect(mapStateToProps)(TermsAndConditionsModal)
