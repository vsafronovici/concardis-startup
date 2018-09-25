import app from './app-reducer'
import i18n from './i18n-reducer'
import configuratorReducer from './configurator-reducer'
import packageConfigureReducer from './package-configure-reducer'

export default {
  ...app,
  ...i18n,
  ...configuratorReducer,
  ...packageConfigureReducer
}
