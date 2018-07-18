import {
  createReducer,
  createRequestTypes
} from 'modules/helpers'

describe('helpers', () => {
  describe('createReducer', () => {
    it('should return a proper object', () => {
      expect(createReducer('REQUEST')).toMatchSnapshot()
    })
  })

  describe('createRequestTypes', () => {
    it('should return a proper object', () => {
      expect(createRequestTypes('REQUEST')).toMatchSnapshot()
    })
  })
})
