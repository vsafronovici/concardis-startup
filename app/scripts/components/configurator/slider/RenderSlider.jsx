import React, { Component } from 'react';
import { Slider } from 'antd';
import { connect } from 'react-redux';
import { step1FieldsSelector } from '../../../selectors/configurator-selector'

class RenderSlider extends Component  {

    state = {
      activeMark: this.props.values[this.props.name] || this.props.defaultValue
    }

    handleChangeSlider = (value) => {
      this.setState({
        activeMark: value
      })
      this.props.handleChangeField(value)
    }

    createMarksValues = items => {
    const obj = {}

    for (let i = 0; i < items.length; i++) {
      obj[items[i]] = {
        style: {
          color: (items[i] === this.state.activeMark) ? '#ff5252' : '#9E9E9E',
          width: ((i === 0 || (i === items.length - 1) ) ? '25%': '22.5%') || 
          ((items[i] === this.state.activeMark) ? '25%' : '22.5%') 
        },
        
        label: ((i === 0 || (i === items.length - 1) ) ? <span>€ {items[i]} </span>: null) || 
              ((items[i] === this.state.activeMark) ? <span className="sc-mark-item">€ {items[i]} </span> : null) 
      }
    }

    return obj
  }

 render() {

  const { sliderItems, name, defaultValue, values } = this.props;
  const marks = this.createMarksValues(sliderItems);
  return(
      <Slider
            dots={true}
            defaultValue={(values[name] || defaultValue)}
            marks={marks}
            min={sliderItems[0]}
            max={sliderItems[sliderItems.length - 1]}
            step={2000}
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

export default connect(mapStateToProps)(RenderSlider);