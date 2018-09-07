import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Slider, Select } from 'antd';

const SliderComponent = props =>  {

    const { field_meta_data: { name, type, title, label, defaultValue, options }, changeFieldValue } = props;
    
    const checkOptions = (type === 'drop_down') ? options.dropdownItems : options.sliderValues
    
    const handleChangeField = value => {
      changeFieldValue({value, name});
    }

    return(
      <div>
          <div>
            <h1>{title}</h1>
          </div>
          <div>
            <h2>{label}</h2>
          </div>
          <div>
            {(type === "drop_down")
              ? <Select />
              : <Slider name={name} defaultValue={defaultValue} style={{touchAction: 'none'}} onChange={(value) => handleChangeField(value)}/> }
          </div>
      </div>
    )
  

}

export default SliderComponent;