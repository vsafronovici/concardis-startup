import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { loadTranslations, setLocale, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n'

import history from 'modules/history'
import rootSaga from 'sagas'
import rootReducer from 'reducers'
import messages from './../i18n/messages'

const sagaMiddleware = createSagaMiddleware()

const reducer = persistReducer(
  {
    key: 'rrsb', // key is required
    storage, // storage is now required
    whitelist: ['app', 'i18n', 'user']
  },
  combineReducers({
    ...rootReducer,
    router: routerReducer,
    i18n: i18nReducer
  })
)

const middleware = [
  sagaMiddleware,
  routerMiddleware(history),
  thunk
]

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger')
  middleware.push(createLogger({ collapsed: true }))
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/* istanbul ignore next */
const configStore = (initialState = {}) => {
  const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middleware))(createStore)

  const store = createStoreWithMiddleware(reducer, initialState)

  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    module.hot.accept('reducers', () => {
      store.replaceReducer(require('reducers').default)
    })
  }

  return {
    persistor: persistStore(store),
    store,
  }
}

const { store, persistor } = configStore()

syncTranslationWithStore(store)
store.dispatch(loadTranslations(messages))
store.dispatch(setLocale('en'))

export { store, persistor }
