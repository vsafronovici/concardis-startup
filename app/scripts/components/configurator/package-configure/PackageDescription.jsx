import React from 'react'
import { connect } from 'react-redux'
import { translate } from './../../../i18n/i18n'
import { Row, Col, Button } from 'antd'

const PackageDescription = props => {

  return(
    <Row>
      <Col span={24}>
        <div className="pd-container">
          <div className="pd-title">
            Personalise your package & apply
          </div>
          <div className="pd-description-1">
            To get everything up and running, you will need to confirm the details of your
            package and fill out an application form. 
          </div>
          <div className="pd-description-2">
            Before you start these are the documents you might need to have access to, to
            complete your application:
          </div>
          <div className="pd-list-container">
            <ul className="pd-list">
              {['feature1', 'feature2', 'feature3'].map( (feature, index) => {
                return(
                  <div className="pd-list-item" key={index}>
                    {feature}
                  </div>
                )
              })}
            </ul>
          </div>
        </div>
      </Col>
    </Row>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PackageDescription)