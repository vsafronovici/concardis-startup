import React from 'react'
import { Spin } from 'antd'

export const Loader = props => {
  return props.loading
    ? <div><Spin size="large" /></div>
    : props.children
}

