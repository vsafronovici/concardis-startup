import { REACT_DEMO } from "./types";

export const sayHelloReq = payload => ({
  type: REACT_DEMO.SAY_HELLO_REQ,
  payload
})

export const sayHelloResp = payload => ({
  type: REACT_DEMO.SAY_HELLO_RESP,
  payload
})

export const getAccountReq = () => ({
  type: REACT_DEMO.ACCOUNT_REQ,
  payload: {
    modelName: 'SfAccount',
    criteria: { limit: 1 }
  }
})

export const getAccountResp = payload => ({
  type: REACT_DEMO.ACCOUNT_RESP,
  payload
})
