import React from 'react'
import { Spin } from 'antd'

export const Loader = props => {
  return (
    <div className="spin-align"><Spin size="large" className="spin-relative" style={{color: '#dc4405 !important'}}/></div>
  )
}

