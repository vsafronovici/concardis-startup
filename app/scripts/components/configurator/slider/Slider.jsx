import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FieldType } from '../../../utils/constants';
import { values } from 'ramda';
import RenderSelect from './RenderSelect'
import RenderSlider from './RenderSlider'
import { stepSelector, step1FieldsSelector } from '../../../selectors/configurator-selector';


const SliderComponent = props =>  {

    const { fieldMetaData: { name, type, title, label, defaultValue, options }, changeFieldValue, step } = props;
    
    const checkOptions = (type === FieldType.DROPDOWN) ? values(options.dropdownItems) : options.sliderValues
    
    const handleChangeField = (value) => {
      changeFieldValue({value, name, step});
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
              ? <RenderSelect selectItems={checkOptions} name={name} title={title} handleChangeField={handleChangeField} defaultValue={defaultValue}/>
              : <RenderSlider sliderItems={checkOptions}  name={name} defaultValue={defaultValue} handleChangeField={handleChangeField}/> }
          </div>
        </div>
    )
}

const mapStateToProps = state => ({
  step: stepSelector(state)
})

export default connect(mapStateToProps)(SliderComponent);