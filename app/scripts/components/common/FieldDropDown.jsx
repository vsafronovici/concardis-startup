import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'
import { translate } from '../../i18n/i18n'
import { FieldTooltip } from "./FieldTooltip";

const Option = Select.Option

const style = {
  width: '200px'
}

export const FieldDropDown = props => {
  const { title, label, subtitle, onChange, placeholder, value, options, tooltip  } = props
  //console.log('DROPDOWN', props)
  return (
    <div className="field-drop-down">
      <div className="flex-row label">
        <label>{translate(label)}</label> {tooltip && <FieldTooltip tooltip={tooltip} />}
      </div>
      <Select onChange={event => onChange(event)} style={style} defaultValue={value} value={value} placeholder={placeholder}>
        {options.items.map( (item, index) => {
          return (
            <Option key={index} value={item.value} className="item">{translate(item.label)}</Option>
          )
        })}
      </Select>
    </div>
  )
}
