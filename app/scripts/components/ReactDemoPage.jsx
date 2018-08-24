import React from 'react'
import { I18n, setLocale, Translate } from 'react-redux-i18n'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAccountReq, sayHelloReq } from "../actions/react-demo-action";
import { accountSelector, sayHelloSelector } from "../selectors/react-demo-selector";

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
    console.log('props', this.props)
    return (
      <div key="Private" className="app__private app__route">
        <div className="app__container">
          <h1>Locale Demo2</h1>
          <h2><Translate value="app.title" /></h2>
          <h2><Translate value="app.hello" name="xxx" /></h2>
          <h2>{I18n.t('app.title')}</h2>
          <h2>{I18n.t('app.hello', { name: 'Aad' })}</h2>
          <div>
            <select onChange={this.onChange}>
              <option value="en">en</option>
              <option value="nl">nl</option>
            </select>
          </div>
        </div>
        <div>
          <button onClick={this.sayHello}>say hello</button>
          <span>{this.props.sayHelloMsg}</span>
        </div>
        <div>
          <button onClick={this.getRemoteObj}>account obj</button>
          {
            this.props.account
              ? <span>
                  Id = {this.props.account.get('Id')}; Name = {this.props.account.get('Name')};
                </span>
            : null
          }
        </div>
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
