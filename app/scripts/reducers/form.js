import { createReducer } from 'modules/helpers';
import { ActionTypes } from 'constants/index';

export const initialState = {
  values: ''
}

export default {
  testForm: createReducer(initialState, {
    [ActionTypes.ADD_VALUES](state, { values }) {
      return {
        ...state,
        values 
      }
    }
  })
}