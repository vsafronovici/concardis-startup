import { createReducer } from 'modules/helpers'
import { parseError } from 'modules/client'

import { ActionTypes } from 'constants/index'

export const initialState = {
  repos: {
    data: {},
    status: 'idle',
    message: '',
    query: '',
  }
}

export default {
  github: createReducer(initialState, {
    [ActionTypes.GITHUB_GET_REPOS_REQUEST](state, { payload }) {
      const data = state.repos.data[payload.query] ? state.repos.data[payload.query] : []

      return {
        repos: {
          data: {
            ...state.repos.data,
            [payload.query]: data,
          },
          message: '',
          query: payload.query,
          status: 'running'
        }
      }
    },
    [ActionTypes.GITHUB_GET_REPOS_SUCCESS](state, { payload }) {
      return {
        repos: {
          data: {
            ...state.repos.data,
            [state.repos.query]: payload.data || [],
          },
          status: 'loaded',
        }
      }
    },
    [ActionTypes.GITHUB_GET_REPOS_FAILURE](state, { payload }) {
      return {
        repos: {
          message: parseError(payload.message) ,
          status: 'error',
        }
      }
    }
  })
}
