// eslint-disable-next-line no-useless-escape
export const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const alphaNumeric = /^([a-zA-Z0-9]{1,})$/
export const integer = /^([0-9]{1,})$/

export const isEmail  = text => email.test(text)
export const isAlphaNumeric  = text => alphaNumeric.test(text)
export const isInteger  = text => integer.test(text)

