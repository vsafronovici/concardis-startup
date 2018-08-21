import { REHYDRATE } from 'redux-persist/lib/constants'
import { createReducer } from './../modules/helpers'

import { APP } from './../actions/types'

export const initialState = {
  alerts: []
}

export default {
  app: createReducer(initialState, {
    [REHYDRATE](state) {
      return initialState
    },
    [APP.HIDE_ALERT](state, { payload: { id } }) {
      return {
        alerts: state.alerts.filter(d => d.id !== id)
      }
    },
    [APP.SHOW_ALERT](state, { payload }) {
      return {
        alerts: [...state.alerts, payload]
      }
    }
  })
}
