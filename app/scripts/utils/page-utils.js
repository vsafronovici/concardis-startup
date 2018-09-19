import { PageContainers } from './constants'
import ConfiguratorPage from '../containers/ConfiguratorPage'

const RootContainers = {
  [PageContainers.CONFIGURATOR_PAGE]: ConfiguratorPage,
}

const rootComponent = rootId => ({
  rootId,
  Container: RootContainers[rootId]
})

export const detectRootContainer = () => {
  switch (true) {
    case (document.getElementById(PageContainers.CONFIGURATOR_PAGE) !== null):
      return rootComponent(PageContainers.CONFIGURATOR_PAGE)

    default:
      return {
        rootId: 'react',
        Container: ConfiguratorPage
      }
  }
}
