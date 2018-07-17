import { createReducer } from 'modules/helpers'
import { ActionTypes } from 'constants/index'

export const userState = {
  isAuthenticated: false,
  status: 'idle',
}

export default {
  user: createReducer(userState, {
    [ActionTypes.USER_LOGIN_REQUEST](state) {
      return {
        ...state,
        status: { $set: 'running' },
      }
    },
    [ActionTypes.USER_LOGIN_SUCCESS](state) {
      return {
        isAuthenticated: true,
        status: 'idle'
      }
    },
    [ActionTypes.USER_LOGOUT_REQUEST](state) {
      return {
        ...state,
        status: 'running'
      }
    },
    [ActionTypes.USER_LOGOUT_SUCCESS](state) {
      return {
        isAuthenticated: false,
        status: 'idle'
      }
    }
  })
}
