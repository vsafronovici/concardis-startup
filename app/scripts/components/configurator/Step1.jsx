import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SliderComponent from './slider/Slider'
import { changeFieldValue  } from '../../actions/configurator-action';

const Step1 = props => {

    const { step1_meta_data, changeFieldValue } = props

    return (
      <div>
        {step1_meta_data.map( (field, index) => {
          return(
            <SliderComponent field_meta_data={field} key={index} changeFieldValue={changeFieldValue}/>
          )
        })}
      </div>
    )
  }

const mapStateToProps = state => ({
  step1_meta_data: state.configurator.step1_meta_data
})

const mapDispatchToProps = dispatch => ({
  changeFieldValue: (value) => {
    dispatch(changeFieldValue(value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Step1)