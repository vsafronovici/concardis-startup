import React from 'react'
import { I18n, setLocale, Translate } from 'react-redux-i18n'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAccountReq, sayHelloReq } from "../actions/react-demo-action";
import { accountSelector, sayHelloSelector } from "../selectors/react-demo-selector";
import MainContent from './MainContent';
import MainFooter from './MainFooter'

export class ReactDemoPage extends React.Component {
  static propTypes = {
    setLocale: PropTypes.func,
    sayHelloReq: PropTypes.func,
    getAccountReq: PropTypes.func,
    sayHelloMsg: PropTypes.string,
    account: PropTypes.object

  }

  onChange = e =>
    this.props.setLocale(e.target.value)

  sayHello = () =>
    this.props.sayHelloReq({ action: window.configSettings.remoteActions.helloWorld })

  getRemoteObj = () => {
    this.props.getAccountReq()
  }


  render() {
    return (
      <div key="Private" className="app__private app__route">
        <MainContent />
        <MainFooter />

      </div>
    )
  }
}

export const mapStateToProps = state => ({
  sayHelloMsg: sayHelloSelector(state),
  account: accountSelector(state)
})

const mapDispatchToProps = ({
  setLocale,
  sayHelloReq,
  getAccountReq
})

export default connect(mapStateToProps, mapDispatchToProps)(ReactDemoPage)
