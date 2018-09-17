import { compose, prop } from 'ramda'
import { ConfiguratorPageStep } from '../utils/constants'

export const formSelector = prop('form')
export const step3FormSelector = compose(prop(ConfiguratorPageStep.STEP3), formSelector)
export const step3AsyncValidatingSelector = compose(prop('asyncValidating'), step3FormSelector)
export const step3ActiveElementSelector = compose(prop('active'), step3FormSelector)

