import React from 'react';
import { Slider } from 'antd';

const RenderSlider = ({ sliderItems, name, defaultValue, handleChangeField }) => {

    const createMarksValues = items => {
    const obj = {}

    for (let i = 0; i < items.length; i++) {
      obj[items[i]] = {
        style: {
          color: '#9E9E9E'
        },
        label: <strong>€ {items[i]}</strong>
      }
    }

    return obj
  }

 const marks = createMarksValues(sliderItems);

  return(
    <Slider
          defaultValue={defaultValue}
          marks={marks}
          min={sliderItems[0]}
          max={sliderItems[sliderItems.length - 1]}
          step={2000}
          style={{touchAction: 'none'}}
          onChange={(value) => handleChangeField(value)}
          name={name}
    >
    </Slider>
  )
}

export default RenderSlider;