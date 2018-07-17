// @flow
/**
 * Helper functions
 * @module Helpers
 */

/**
 * Generate reducer.
 *
 * @param {Object} initialState
 * @param {Object} handlers
 * @returns {function}
 */
export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    const handler = handlers[action.type]
    return handler ? handler(state, action) : state
  }
}

/**
 * Create request types for contants
 * @param {string} base
 * @returns {Object}
 */
export function createRequestTypes(base: string): Object {
  return ['REQUEST', 'SUCCESS', 'FAILURE'].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}
