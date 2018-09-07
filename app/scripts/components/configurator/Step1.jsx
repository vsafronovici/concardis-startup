import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SliderComponent from './slider/Slider'
import { changeFieldValue  } from '../../actions/configurator-action';
import { Row, Col } from 'antd'

const Step1 = props => {

    const { step1MetaData, changeFieldValue } = props

    return (
        <div>
          <Row>
            <Col lg={{span: '10', offset: '7'}}>
              <div className="sc-row-wrapper">
                <Row>
                  {step1MetaData.map( (field, index) => {
                    return(                      
                        <Col lg={{span: '12'}}>
                          <SliderComponent fieldMetaData={field} key={index * index} changeFieldValue={changeFieldValue}/>
                        </Col>
                    )
                  })}
                </Row>
              </div>
            </Col>
          </Row>
        </div>
    )
  }

const mapStateToProps = state => ({
  step1MetaData: state.configurator.step1MetaData
})

const mapDispatchToProps = dispatch => ({
  changeFieldValue: (value) => {
    dispatch(changeFieldValue(value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Step1)