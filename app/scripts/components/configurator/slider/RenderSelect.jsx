import React, { Component } from 'react'
import { Select } from 'antd' 
import { connect } from 'react-redux'
import { step1FieldsSelector } from '../../../selectors/configurator-selector'

class RenderSelect extends Component {

  render() {
    const { selectItems, title, handleChangeField, values, name, defaultValue } = this.props;
    const Option = Select.Option
    return(
      <Select 
              defaultValue={(values[name] || defaultValue)}            
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

const mapStateToProps = state => ({
  values: step1FieldsSelector(state)
})

export default connect(mapStateToProps)(RenderSelect)