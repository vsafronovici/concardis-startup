import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SliderComponent from './slider/Slider'
import { changeFieldValue  } from '../../actions/configurator-action';

const Step1 = props => {

    const { fields, changeFieldValue } = props

    return (
      <div>
        {fields.map( (field, index) => {
          return(
            <SliderComponent field={field} key={index} changeFieldValue={changeFieldValue}/>
          )
        })}
      </div>
    )
  }

const mapStateToProps = state => ({
  fields: state.configurator.fields
})

const mapDispatchToProps = dispatch => ({
  changeFieldValue: (value) => {
    console.log(value)
    dispatch(changeFieldValue(value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Step1)