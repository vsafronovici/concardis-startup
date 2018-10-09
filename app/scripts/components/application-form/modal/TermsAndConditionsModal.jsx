import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'antd'
import PropTypes from 'prop-types'
import { Loader } from '../../Loader'
import { request } from './../../../modules/client'
import { NodeProcess } from '../../../utils/constants'
import { translate } from '../../../i18n/i18n'
import { i18nLangSelector } from '../../../selectors/i18n-selector'

const Footer = props => (
  <div className="tac-footer">
    <div className="tac-footer-l">footer</div>
    <div className="tac-footer-r"><Button onClick={props.onOk}>Accept</Button></div>
  </div>
)

const Content = props => (
  <div style={{ height: 700, overflowY: 'scroll', padding: '22px' }} onScroll={props.handleScroll}>
    { props.html }
  </div>
)

export class TermsAndConditionsModal extends Component {

  handleScroll = e => {
    console.log('Content handleScroll e=', e.target)
    const o = e.target
    if(o.offsetHeight + o.scrollTop == o.scrollHeight) {
      console.log("===============End");
    }
  }

  componentDidMount() {
    if (process.env.NODE_ENV === NodeProcess.DEV) {
      this.html = (
          <div>
            Some contents...
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
              dadasd rrwer
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
              dsadsadsa
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            end end
          </div>
      )
    } else {
      request(window.configSettings.XHRs.TAD[this.props.lang]).then(res => {
        this.content = <div dangerouslySetInnerHTML={{ __html: res.data }} />
      })
    }
  }

  render() {
    const { show, onClose, onOk } = this.props
    const { html } = this


    const content = html && <Content html={html} handleScroll={this.handleScroll}/>

    return (
      <Modal
        ref={el => { this.modal = el }}
        title={translate('tac.title')}
        visible={show}
        onCancel={onClose}
        footer={[<Footer onOk={onOk} />]}
        width="90%"
        bodyStyle={{ height: 700, padding: 0 }}
      >
        { content || <Loader /> }
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
