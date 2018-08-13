// @flow
/**
 * Client
 * @module Client
 */

export class ServerError extends Error {
  response: Object;

  constructor(response: Object, ...params: any): Error {
    super(...params)

    Error.captureStackTrace(this, ServerError)

    this.name = 'ServerError'
    this.response = {}

    return this
  }
}

export function parseError(error: string): string {
  return error || 'Something went wrong'
}

/**
 * Fetch data
 *
 * @param {string} url
 * @param {Object} options
 * @param {string} [options.method] - Request method ( GET, POST, PUT, ... ).
 * @param {string} [options.payload] - Request body.
 * @param {Object} [options.headers]
 *
 * @returns {Promise}
 */
export function request(url: string, options: Object = {}): Promise<*> {
  const config = {
    method: 'GET',
    ...options
  }
  const errors = []

  if (!url) {
    errors.push('url')
  }

  if (!config.payload && (config.method !== 'GET' && config.method !== 'DELETE')) {
    errors.push('payload')
  }

  if (errors.length) {
    throw new Error(`Error! You must pass \`${errors.join('`, `')}\``)
  }

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...config.headers
  }

  const params: Object = {
    headers,
    method: config.method
  }

  if (params.method !== 'GET') {
    params.body = JSON.stringify(config.payload)
  }

  return fetch(url, params)
    .then(async (response) => {
      if (response.status > 299) {
        const error: ServerError = new ServerError(response.statusText)
        const contentType = response.headers.get('content-type')

        if (contentType && contentType.includes('application/json')) {
          error.response = {
            status: response.status,
            data: await response.json()
          }
        }
        else {
          error.response = {
            status: response.status,
            data: await response.text()
          }
        }

        throw error
      }
      else {
        const contentType = response.headers.get('content-type')
        if (contentType && contentType.includes('application/json')) {
          return response.json()
        }

        return response.text()
      }
    })
}

export const SFAction = (action) => {
  return new Promise((resolve, reject) => {
    Visualforce.remoting.Manager.invokeAction(
      action,
      (result, event) => {
        if (event.status) {
          return resolve({ data: result })
        }

        return reject({ err: result })
      },
      { buffer: true, escape: true }
    )
  })
}

export const SFRemoteObject = (modelName, criteria) => {
  return new Promise((resolve, reject) => {
    const modelCtx = new SObjectModel[modelName]()
    modelCtx.retrieve(
      criteria,
      (err, records, event) => {
        if (err) {
          return reject({ err: err.message, status: 400 })
        }
        return resolve({ data: { records } })
      }
    )
  })
}
