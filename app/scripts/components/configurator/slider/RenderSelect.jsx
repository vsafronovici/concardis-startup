import React from 'react';
import { Select } from 'antd' 

const RenderSelect = ({selectItems, title, handleChangeField}) => {
  const Option = Select.Option
  return(
    <Select
            onChange={value => handleChangeField(value)}
            showSearch
            style={{ width: 200 }}
            placeholder={title}
            optionFilterProp="children"
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
      {selectItems.map((item, index) => {
        return(
          <Option value={item} key={index}>{item}</Option>
        )
      })}
    </Select>
)
}

export default RenderSelect