import React from 'react';
import { I18n, setLocale, Translate } from 'react-redux-i18n'
import { connect } from "react-redux";

export class LocaleDemoPage extends React.Component {

  onChange = e =>
    this.props.dispatch(setLocale(e.target.value))

  render() {
    return (
      <div key="Private" className="app__private app__route">
        <div className="app__container">
          <h1>Locale Demo2</h1>
          <h2><Translate value="app.title"/></h2>
          <h2><Translate value="app.hello" name="xxx"/></h2>
          <h2>{I18n.t('app.title')}</h2>
          <h2>{I18n.t('app.hello', {name: 'Aad'})}</h2>
          <div>
            <select onChange={this.onChange}>
              <option value="en">en</option>
              <option value="nl">nl</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(LocaleDemoPage);

