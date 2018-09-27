import React from 'react'
import { Row, Col, Button } from 'antd'

const PackageFooter = props => {

  return(
    <div className="pkg-footer-container">
      <div className="pkg-flex-container">
        <div className="pkg-footer-date">title</div>
        <div className="pkg-footer-button"><Button>Button</Button></div>
      </div>
    </div>
  )
}

export default PackageFooter