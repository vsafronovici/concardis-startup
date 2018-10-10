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
    <div className="tac-footer-r"><Button onClick={props.onOk} disabled={props.disabled}>Accept</Button></div>
  </div>
)

const Content = props => (
  <div style={{ height: 700, overflowY: 'scroll', padding: '22px' }} onScroll={props.handleScroll}>
    { props.html }
  </div>
)

class Content2 extends Component {
  componentDidMount() {
    const iframe = document.getElementById('my-iframe')
    console.log('TermsAndConditionsModal Content2.componentDidMount', {1: iframe.contentWindow, 2: iframe.window, 3: iframe.document})

    const w = iframe.contentWindow
    w.onscroll = e => {
      const d = e.target
      console.log('TermsAndConditionsModal scrolling ', {w, d})
    }
  }

  render() {
    return (
      <iframe
        src="http://localhost:3000"
        id="my-iframe"
        height={300}
        width={'100%'}
        scrolling="true"></iframe>
    )
  }
}

export class TermsAndConditionsModal extends Component {

  state = {
    seen: false
  }

  handleScroll = e => {
    console.log('Content handleScroll e=', e.target)
    const o = e.target
    if(o.offsetHeight + o.scrollTop == o.scrollHeight) {
      console.log("===============End");
      this.setState({ seen: true })
    }
  }

  componentDidMount() {
    const iframe = document.getElementById('my-iframe')
    console.log('TermsAndConditionsModal componentDidMount', iframe)

    if (process.env.NODE_ENV === NodeProcess.DEV) {
      /*this.html = (
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
      )*/
      /*this.html = (
        <iframe
          src="https://concardis--smejoindev--c.cs109.visual.force.com/resource/1538657587000/POS_Service?"
          id="my-iframe"
          height={600}
          width={'100%'}
          scrolling="true"></iframe>
      )*/

    } else {
      /*request(window.configSettings.XHRs.TAD[this.props.lang]).then(res => {
        this.content = <div dangerouslySetInnerHTML={{ __html: res.data }} />
      })*/
      this.html = (
        <iframe
          src="https://concardis--smejoindev--c.cs109.visual.force.com/resource/1538657587000/POS_Service?"
          id="my-iframe"
          height={600}
          width={'100%'}
          scrolling="true"></iframe>
      )

    }
  }

  render() {
    const { show, onClose, onOk } = this.props
    const { html } = this


    //const content = html && <Content html={html} handleScroll={this.handleScroll}/>

    return (
      <Modal
        ref={el => { this.modal = el }}
        title={translate('tac.title')}
        visible={show}
        onCancel={onClose}
        footer={[<Footer onOk={onOk} disabled={!this.state.seen}/>]}
        width="90%"
        bodyStyle={{ height: 700, padding: 0 }}
      >
        {/*{ content || <Loader /> }*/}
        <Content2 />
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
