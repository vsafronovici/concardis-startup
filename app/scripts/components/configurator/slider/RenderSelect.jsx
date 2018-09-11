import React, { Component } from 'react';
import { Select } from 'antd' 

class RenderSelect extends Component {

  componentWillMount() {
    console.log(this.props)
    this.props.handleChangeField(this.props.defaultValue)
  }

  render() {
    const {selectItems, title, handleChangeField} = this.props;
    const Option = Select.Option
    return(
      <Select
              onChange={value => handleChangeField(value)}
              showSearch
              style={{ width: '100%' }}
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
   
}

export default RenderSelect