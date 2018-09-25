import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { values } from 'ramda'


import { translate } from './../../../i18n/i18n'
import { FieldType } from '../../../utils/constants'
import RenderSelect from './RenderSelect'
import RenderSlider from './RenderSlider'
import { stepSelector, step1FieldsSelector } from '../../../selectors/configurator-selector'


const SliderComponent = props => {
  const { fieldMetaData: { name, type, title, label, defaultValue, options }, changeFieldValue, step } = props

  const fieldHint = (type === FieldType.DROPDOWN) ? props.fieldMetaData.fieldHint : null

  const checkOptions = (type === FieldType.DROPDOWN)
    ? values(options.dropdownItems).map(selectValue => translate(selectValue))
    : options.sliderValues.map(sliderValue => Number(translate(sliderValue)))

  const handleChangeField = (value) => {
    changeFieldValue({ value, name, step })
  }

  return (
    <div className="sc-content">
      <div className="sc-title">
        {translate(label)}
      </div>
      <div className="sc-label">
        {translate(title)}
      </div>
      <div className={(type === FieldType.DROPDOWN) ? 'sc-slider-select' : 'sc-slider-slider'}>
        {(type === FieldType.DROPDOWN)
          ? <RenderSelect
            selectItems={checkOptions} name={name} title={translate(title)} handleChangeField={handleChangeField}
            defaultValue={translate(defaultValue)} fieldHint={translate(fieldHint)}
          />
          : <RenderSlider
            sliderItems={checkOptions} name={name} title={translate(title)}
            defaultValue={Number(translate(defaultValue))}
            handleChangeField={handleChangeField}
          />}
      </div>
    </div>
  )
}

SliderComponent.propTypes = {
  fieldMetaData: PropTypes.object,
  changeFieldValue: PropTypes.func,
  step: PropTypes.string
}

const mapStateToProps = state => ({
  step: stepSelector(state)
})

export default connect(mapStateToProps)(SliderComponent)
