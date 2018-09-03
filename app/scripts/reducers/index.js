import app from './app-reducer'
import i18n from './i18n-reducer'
import applicationForm from './application-form-reducer'

export default {
  ...app,
  ...i18n,
  ...applicationForm
}
