import app from './app-reducer'
import github from './github'
import user from './user'
import reactDemo from './react-demo-reducer'
import i18n from './i18n-reducer'
import applicationForm from './application-form-reducer'

export default {
  ...app,
  ...github,
  ...user,
  ...reactDemo,
  ...i18n,
  ...applicationForm
}
