import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Slider, Select } from 'antd';

const SliderComponent = props =>  {

    const { field: { name, type, title, label, options : { items }, defaultValue }, changeFieldValue } = props;
    
    const handleChangeField = data => {
      changeFieldValue({data, name});
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