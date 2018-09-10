import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SliderComponent from './slider/Slider'
import { changeFieldValue, goToStep  } from '../../actions/configurator-action';
import { Row, Col, Button } from 'antd';
import { step1MetaSelector } from '../../selectors/configurator-selector';
import { initData } from '../../actions/application-form-action';
import { ConfiguratorPageStep } from '../../utils/constants'
import { Loader } from '../Loader'

const Step1 = props => {

    const { step1MetaData, changeFieldValue } = props

    console.log('Step1', props)

    return (
      !step1MetaData
        ? <Loader />
        : (
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
                <Row>
                  <Col span={8} offset={14}>
                    <div className="sc-wrapper-button">
                      <Button className="sc-nav-button" onClick={() => props.goToStep(ConfiguratorPageStep.STEP2)}>
                        show me the products
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      )
    )
  }

const mapStateToProps = state => ({
  step1MetaData: step1MetaSelector(state)
})

const mapDispatchToProps = ({
  changeFieldValue,
  goToStep
  
})
export default connect(mapStateToProps, mapDispatchToProps)(Step1)
