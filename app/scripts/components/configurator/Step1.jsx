import React from 'react'
import { connect } from 'react-redux'
import SliderComponent from './slider/Slider'
import { changeFieldValue, goToStep } from '../../actions/configurator-action'
import { Row, Col, Button } from 'antd'
import { step1MetaSelector } from '../../selectors/configurator-selector'
import { ConfiguratorPageStep } from '../../utils/constants'
import { Loader } from '../Loader'
import { translate } from './../../i18n/i18n'
import { step1FieldsSelector } from './../../selectors/configurator-selector'
import { notEmptyValues } from './../../utils/function-utils'

const Step1 = props => {
  const { step1MetaData, changeFieldValue, values } = props
  
  return (
    !step1MetaData
      ? <Loader />
      : (
        <div>
          <Row>
            <Col lg={{ span: '10', offset: '7' }}>
              <div className="sc-row-wrapper">
                <Row>
                  {step1MetaData.map((field, index) => {
                    return (
                      <div key={index}>
                        <Col lg={{ span: '12' }}>
                          <SliderComponent fieldMetaData={field} key={index * index} changeFieldValue={changeFieldValue}/>
                        </Col>
                      </div>
                    )
                  })}
                </Row>
                <Row>
                  <Col span={8} offset={14}>
                    <div className="sc-wrapper-button">
                      <Button onClick={() => props.goToStep(ConfiguratorPageStep.STEP2)} disabled={notEmptyValues(values)}>
                        {translate('btn.ShowProducts')}
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
  step1MetaData: step1MetaSelector(state),
  values: step1FieldsSelector(state)
})

const mapDispatchToProps = ({
  changeFieldValue,
  goToStep
})

export default connect(mapStateToProps, mapDispatchToProps)(Step1)
