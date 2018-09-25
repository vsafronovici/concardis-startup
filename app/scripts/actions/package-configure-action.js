import { PACKAGE_CONFIGURE } from './types'

export const initData = () => ({
  type: PACKAGE_CONFIGURE.INIT_DATA
})

export const getMetaPackageReq = () => ({
  type: PACKAGE_CONFIGURE.GET_META_PACKAGE_REQ
})

export const getMetaPackageRes = payload => ({
  type: PACKAGE_CONFIGURE.GET_META_PACKAGE_RES,
  payload
})
