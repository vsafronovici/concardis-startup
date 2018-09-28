import React from 'react'
import { connect } from 'react-redux'
import { translate } from './../../../i18n/i18n'
import { Row, Col, Button, Icon } from 'antd'

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
              {['Your company information as in Official Register', 'Your VAT information (if applicable)', 'Your payment details'].map( (feature, index) => {
                return(
                  <li className="pd-list-item" key={index}>
                    {feature}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="pd-cards-container">
            <Row>
              <Col span={8}>
                <div className="pd-card-title">
                  <Icon type="clock-circle" theme="outlined" style={{ fontSize: '30px', color: '#616161' }}/>
                </div>
                <div className="pd-card-description">
                  It should take
                  less than 10 min
                  to complete
                </div>
              </Col>
              <Col span={8}>
                <div className="pd-card-title">
                  <Icon type="sync" theme="outlined" style={{ fontSize: '30px', color: '#616161' }}/>
                </div>
                <div className="pd-card-description">
                  You can save it
                  and resume later
                </div>
              </Col>
              <Col span={8}>
                <div className="pd-card-title">
                  <Icon type="exclamation-circle" theme="outlined" style={{ fontSize: '30px', color: '#616161' }}/>
                </div>
                <div className="pd-card-description">
                  Remember, your offer
                  expires on
                </div>
              </Col>
            </Row>
          </div>
          <Button>
            Personalise package & apply
          </Button>
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