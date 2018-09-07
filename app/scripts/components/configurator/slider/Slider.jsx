import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Slider, Select } from 'antd';
import { FieldType } from '../../../utils/constants';
import { values } from 'ramda';
import RenderSelect from './RenderSelect'
import RenderSlider from './RenderSlider'


const SliderComponent = props =>  {

    const { fieldMetaData: { name, type, title, label, defaultValue, options }, changeFieldValue } = props;
    
    const checkOptions = (type === FieldType.DROPDOWN) ? values(options.dropdownItems) : options.sliderValues
    
    const handleChangeField = value => {
      changeFieldValue({value, name});
    }

    return(
        <div className="sc-content">
          <div className="sc-title">
            <h1>{title}</h1>
          </div>
          <div className="sc-label">
            <h2>{label}</h2>
          </div>
          <div className={(type === FieldType.DROPDOWN) ? 'sc-slider-select' : 'sc-slider-slider'}>
            {(type === FieldType.DROPDOWN)
              ? <RenderSelect selectItems={checkOptions} title={title} handleChangeField={handleChangeField} />
              : <RenderSlider sliderItems={checkOptions} name={name} defaultValue={defaultValue} handleChangeField={handleChangeField}/> }
          </div>
        </div>
    )
  

}

export default SliderComponent;