import { PageContainers } from './constants'
import ConfiguratorPage from '../containers/ConfiguratorPage'
import PackageConfigurePage from '../containers/PackageConfigurePage'
import ApplicationFormPage from '../containers/ApplicationFormPage'

const RootContainers = {
  [PageContainers.CONFIGURATOR_PAGE]: ConfiguratorPage,
  [PageContainers.PACKAGE_CONFIGURE_PAGE]: PackageConfigurePage,
  [PageContainers.APPLICATION_FORM_PAGE]: ApplicationFormPage
}

const rootComponent = rootId => ({
  rootId,
  Container: RootContainers[rootId]
})

export const detectRootContainer = () => {
  switch (true) {
    case (document.getElementById(PageContainers.CONFIGURATOR_PAGE) !== null):
      return rootComponent(PageContainers.CONFIGURATOR_PAGE)

    case (document.getElementById(PageContainers.PACKAGE_CONFIGURE_PAGE) !== null):
      return rootComponent(PageContainers.PACKAGE_CONFIGURE_PAGE)

    case (document.getElementById(PageContainers.APPLICATION_FORM_PAGE) !== null):
      return rootComponent(PageContainers.APPLICATION_FORM_PAGE)

    default:
      return {
        rootId: 'react',
        Container: ConfiguratorPage
      }
  }
}
