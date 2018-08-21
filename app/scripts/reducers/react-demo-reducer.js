import { createReducer } from 'modules/helpers'
import { REACT_DEMO } from "../actions/types";

export const initialState = {
  helloMsg: '',
  account: undefined
}

export default {
  reactDemo: createReducer(initialState, {
    [REACT_DEMO.SAY_HELLO_RESP](state, { payload }) {
      return {
        ...state,
        helloMsg: payload.data
      }
    },
    [REACT_DEMO.ACCOUNT_RESP](state, { payload }) {
      return {
        ...state,
        account: payload.data.records[0]
      }
    }

  })
}
