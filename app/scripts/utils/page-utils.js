import LandingPage from '../containers/LandingPage'
import { PageContainers } from './constants'
import ApplicationFormPage from '../containers/ApplicationFormPage'
import ConfiguratorPage from '../containers/ConfiguratorPage'

const RootContainers = {
  [PageContainers.LANDING_PAGE]: LandingPage,
  [PageContainers.APPLICATION_FORM_PAGE]: ApplicationFormPage,
  [PageContainers.CONFIGURATOR_PAGE]: ConfiguratorPage,
}

const rootComponent = rootId => ({
  rootId,
  Container: RootContainers[rootId]
})

export const detectRootContainer = () => {
  switch (true) {
    case (document.getElementById(PageContainers.LANDING_PAGE) !== null):
      return rootComponent(PageContainers.LANDING_PAGE)

    case (document.getElementById(PageContainers.APPLICATION_FORM_PAGE) !== null):
      return rootComponent(PageContainers.APPLICATION_FORM_PAGE)

    case (document.getElementById(PageContainers.CONFIGURATOR_PAGE) !== null):
      return rootComponent(PageContainers.CONFIGURATOR_PAGE)

    default:
      return {
        rootId: 'react',
        Container: LandingPage
      }
  }
}
