import React from 'react'
import { Icon, Row } from 'antd'

const ErrorForm = ({ error }) => (
  <Row className="flex-row">
    <div className="error-icon-container">
      <Icon type="exclamation" theme="outlined" />
    </div>
    <div className="form-field-row">
      <div className="error" style={{ marginLeft: '1.5em', maxWidth: '210px' }}>{error}</div>
    </div>
  </Row>
)

export default ErrorForm
