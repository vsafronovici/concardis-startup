import { SignUpCode } from './../../../../utils/constants'
import { translate } from './../../../../i18n/i18n'

export const withButton = (code) => {
  switch (code) {
    case SignUpCode.SCEN2:
    case SignUpCode.SCEN3:
    case SignUpCode.SCEN5:
      return true
    default:
      return false
  }
}

export const getButtonTitle = code => {
  switch (code) {
    case SignUpCode.SCEN2:
      return translate('btn.login')
    case SignUpCode.SCEN3:
      return translate('btn.loginAndStart')
    case SignUpCode.SCEN5:
      return translate('btn.viewUpgrades')
    default:
      return null
  }
}

export const getTitle = code => {
  switch (code) {
    case SignUpCode.SCEN1:
      return translate('configurator.msgPage.1.title')
    case SignUpCode.SCEN2:
    case SignUpCode.SCEN3:
      return translate('configurator.msgPage.2.title')
    case SignUpCode.SCEN4:
    case SignUpCode.SCEN5:
      return translate('global.hello')
    default:
      return `wrong code ${code}`
  }
}

export const getTitle2 = code => {
  switch (code) {
    case SignUpCode.SCEN1:
      return translate('configurator.msgPage.1.title2')
    case SignUpCode.SCEN2:
      return translate('configurator.msgPage.2.title2')
    case SignUpCode.SCEN3:
      return translate('configurator.msgPage.3.title2')
    case SignUpCode.SCEN4:
      return translate('configurator.msgPage.4.title2')
    case SignUpCode.SCEN5:
      return translate('configurator.msgPage.5.title2')
    default:
      return null
  }
}

export const withTitle3 = code => {
  switch (code) {
    case SignUpCode.SCEN2:
    case SignUpCode.SCEN3:
    case SignUpCode.SCEN4:
      return true
    default:
      return false
  }
}

export const getTitle3 = code => {
  switch (code) {
    case SignUpCode.SCEN2:
      return translate('configurator.msgPage.2.title3')
    case SignUpCode.SCEN3:
      return translate('configurator.msgPage.3.title3')
    case SignUpCode.SCEN4:
      return translate('configurator.msgPage.4.title3')
    default:
      return null
  }
}

export const withName = code => {
  switch (code) {
    case SignUpCode.SCEN4:
    case SignUpCode.SCEN5:
      return true
    default:
      return false
  }
}
