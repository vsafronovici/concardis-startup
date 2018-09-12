import React, { Component } from 'react'
import { Slider } from 'antd'
import { connect } from 'react-redux'

import { step1FieldsSelector } from '../../../selectors/configurator-selector'

class RenderSlider extends Component  {

    state = {
      activeMark: this.props.values[this.props.name] || this.props.defaultValue
    }

    handleChangeSlider = (value) => {
      this.setState({
        activeMark: value
      })
      this.props.handleChangeField(this.props.sliderItems[value])
    }

    createMarksValues = items => {
    const obj = {}

    for (let i = 0; i < items.length; i++) {

      obj[i] = {
        style: {
          color: (items[i] === this.state.activeMark) ? '#ff5252' : '#9E9E9E',
          width: ((i === 0 || (i === items.length - 1) ) ? '25%' : '22.5%') || 
          ((items[i] === this.state.activeMark) ? '25%' : '22.5%') 
        },
        
        label: ((i === 0 || (i === items.length - 1) ) ? <span>€ {items[i]} </span>: null) || 
        ((items[i] === this.state.activeMark) ? <span className="sc-mark-item">€ {items[i]} </span> : null) 
      }
    }
    return obj
  }

  checkDefaultValue = (items, defValue) => {
    
    const checkedDefaultValue = items.indexOf(defValue)
    
    return checkedDefaultValue
  }

 render() {
   console.log(this.props)
  const { sliderItems, name, defaultValue } = this.props
  const marks = this.createMarksValues(sliderItems)
  const checkedDefaultValue = this.checkDefaultValue(sliderItems, defaultValue)
 
  return(
      <Slider
            dots={true}
            defaultValue={checkedDefaultValue}
            marks={marks}
            min={0}
            max={sliderItems.length - 1}
            step={1}
            style={{touchAction: 'none'}}
            onChange={(value) => this.handleChangeSlider(value)}
            name={name}
      />
  )
 }
}

const mapStateToProps = (state, ownProps) => ({
  values: step1FieldsSelector(state)
})

export default connect(mapStateToProps)(RenderSlider)