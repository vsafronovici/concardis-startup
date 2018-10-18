import { NodeProcess } from '../utils/constants'
import { delayResponse } from '../utils/function-utils'

function memoize(method) {
  const cache = {}

  return async function() {
    const [action] = arguments
    const key = JSON.stringify(action)
    cache[key] = cache[key] || method.apply(this, arguments)
    return cache[key]
  }
}

export const SFAction = (action, options = {}) => {
  const { actionName, args } = action

  if (process.env.NODE_ENV === NodeProcess.DEV) {
    console.log('SFAction invoked in DEV', action)
    const { mockResponse } = require('./../mock-data/mock-utils')
    const resp = mockResponse(actionName)
    return delayResponse(resp)
  }

  const invokeActionArgs = [actionName]
  if (args) {
    invokeActionArgs.push(args)
  }

  console.log(`SFAction ${actionName} REQUEST`, {args})

  let { buffer, escape, parseToJSON } = options
  buffer = (buffer !== undefined) ? buffer : true
  escape = (escape !== undefined) ? escape : false
  parseToJSON = (parseToJSON !== undefined) ? parseToJSON : false

  return new Promise((resolve, reject) => {
    window.Visualforce.remoting.Manager.invokeAction(
      ...invokeActionArgs,
      (result, event) => {
        if (event.status) {
          if (parseToJSON) {
            result = JSON.parse(result)
          }
          console.log(`SFAction ${actionName} RESPONSE`, result)
          return resolve({ data: result })
        }

        console.log(`SFAction ${actionName} RESPONSE ERR`, result)
        return reject({ err: result })
      },
      { buffer, escape }
    )
  })
}

export const memoizedSFAction = memoize(async (action, options) => await SFAction(action, options))

export const SFRemoteObject = (modelName, criteria) => new Promise((resolve, reject) => {
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

export function request(url, options = {}) {
  const config = {
    method: 'GET',
    ...options
  }

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...config.headers
  }

  const params = {
    //headers,
    method: config.method
  }

  return fetch(url)
    .then(res => {
      console.log('Request ', {res})
      const { status } = res
      if (status === 200) {
        //console.log('Request text=', res.text())
        return res.text()
      } else {
        return ({ err: 'error' })
      }
    }).then(res => ({ data: res }))
}

