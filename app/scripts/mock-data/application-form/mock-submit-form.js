import { RESPONSE_STATUS } from '../../utils/constants'

export const success = {
  status: RESPONSE_STATUS.OK
}

export const error = {
  status: RESPONSE_STATUS.ERR,
  errorMessage: 'something bad'
}
