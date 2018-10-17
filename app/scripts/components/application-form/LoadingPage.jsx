import React from 'react'
import { Row, Col } from 'antd'
import { Loader } from "../Loader";

export const LoadingPage = props => {

  return (
    <Row>
      <Col span={16} offset={4}>
        <div className="container-loading-page">
          <div className="title">
            Just a moment...
          </div>
          <div className="description">
            We`re submitting your application. it shouldn`t take a long time.
          </div>
          <div className="loader">
            <Loader/>
          </div>
        </div>
      </Col>
    </Row>
  )
}
