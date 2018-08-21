import { path, pathOr } from 'ramda'

const pathOrEmpty = pathOr({})

export const sayHelloSelector = pathOrEmpty(['reactDemo', 'helloMsg'])
export const accountSelector = path(['reactDemo', 'account'])


