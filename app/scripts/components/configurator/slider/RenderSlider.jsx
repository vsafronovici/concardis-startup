import React, { Component } from 'react'
import { Slider } from 'antd'
import { connect } from 'react-redux'

import { step1FieldsSelector } from '../../../selectors/configurator-selector'
import { checkCurrentValue } from './../../../utils/function-utils'

class RenderSlider extends Component {
    state = {
      activeMark: checkCurrentValue(this.props.sliderItems, this.props.values[this.props.name])
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
            color: (i === this.state.activeMark) ? '#ff5252' : '#9E9E9E',
            width: ((i === 0 || (i === items.length - 1)) ? '25%' : '22.5%') ||
          ((i === this.state.activeMark) ? '25%' : '22.5%')
          },

          label: ((i === 0 || (i === items.length - 1)) && i !== this.state.activeMark) ? <span>€ {items[i]} </span> : null ||
        (i === this.state.activeMark) ? <span className="sc-mark-item">€ {items[i]} </span> : null
        }
      }
      return obj
    }


    render() {
      console.log('this.state.activemark', this.state.activeMark)
      const { sliderItems, name, defaultValue, values } = this.props
      const marks = this.createMarksValues(sliderItems)
      const checkedCurrentValue = checkCurrentValue(sliderItems, values[name])
      return (
        <Slider
          dots={true}
          defaultValue={checkedCurrentValue}
          marks={marks}
          min={0}
          max={sliderItems.length - 1}
          step={1}
          style={{ touchAction: 'none' }}
          onChange={(value) => this.handleChangeSlider(value)}
          name={name}
          tipFormatter={null}
        />
      )
    }
}

const mapStateToProps = (state, ownProps) => ({
  values: step1FieldsSelector(state)
})

export default connect(mapStateToProps)(RenderSlider)
