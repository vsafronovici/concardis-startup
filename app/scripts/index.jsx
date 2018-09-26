// Polyfills
import 'core-js/shim'
import 'isomorphic-fetch'
import 'classlist-polyfill'
import 'vendor/polyfills'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { PersistGate } from 'redux-persist/lib/integration/react'

import 'antd/dist/antd.css'

import { store, persistor } from './store'
import { showAlert } from './actions/app-action'

import App from './containers/App'
import '../styles/main.scss'
import { detectRootContainer } from './utils/page-utils'

export const init = {
  cssRetries: 0,
  fetchRetries: 0,

  run() {
    const { rootId } = detectRootContainer()
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      // put salesforce config data
      const { mockVisualForceConfig } = require('./mock-data/mock-utils')
      window.configSettings = mockVisualForceConfig

      this.render(rootId)
      return Promise.resolve()
    }

    this.initOfflinePlugin()

    /* istanbul ignore next */
    return Promise
      .all([this.loadCSS()])
      .then(() => this.render(rootId))
      .catch(reason => {
        if (this.fetchRetries < 3) {
          this.fetchRetries++
          this.run()
        }
      })
  },
  loadCSS() {
    /* istanbul ignore next */
    return new Promise(resolve => {
      this.retryCSS = () => {
        if (this.isCSSLoaded() || this.cssRetries > 2) {
          resolve()
        } else {
          this.cssRetries++
          setTimeout(() => {
            this.retryCSS()
          }, this.cssRetries * 500)
        }
      }

      this.retryCSS()
    })
  },
  initOfflinePlugin() {
    const OfflinePlugin = require('offline-plugin/runtime')

    /* istanbul ignore next */
    OfflinePlugin.install({
      onUpdateReady: () => {
        OfflinePlugin.applyUpdate()
      },
      onUpdated: () => {
        store.dispatch(showAlert((
          <div className="app__cache-reload">
            <p>There's a new version of this app!</p>
            <button className="btn btn-sm btn-outline-primary" onClick={() => window.location.reload()}>
              Reload
            </button>
          </div>
        ), { id: 'sw-update', type: 'primary', icon: 'i-flash', timeout: 0 }))
      }
    })
  },
  isCSSLoaded() {
    const styles = document.styleSheets

    /* istanbul ignore next */
    try {
      for (let i = 0; i < styles.length; i++) {
        if (styles[i].href && styles[i].href.match('app.*.css')) {
          if (styles[i].cssRules !== null && styles[i].cssRules.length > 0) {
            return true
          }
        }
      }
    } catch (e) {
      // error
    }

    return false
  },
  render(rootId) {
    const root = document.getElementById(rootId)

    /* istanbul ignore next */
    if (root) {
      ReactDOM.render(
        <AppContainer>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <App />
            </PersistGate>
          </Provider>
        </AppContainer>,
        root
      )
    }
  }
}

init.run()

/* istanbul ignore next  */
if (module.hot) {
  const { rootId } = detectRootContainer()
  module.hot.accept(
    'containers/App',
    () => init.render(rootId)
  )
}
