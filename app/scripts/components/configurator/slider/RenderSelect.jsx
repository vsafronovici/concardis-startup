import React, { Component } from 'react'
import { Select } from 'antd' 
import { connect } from 'react-redux'
import { step1FieldsSelector } from '../../../selectors/configurator-selector'

class RenderSelect extends Component {

  render() {

    const { selectItems, handleChangeField, fieldHint, values, name } = this.props
    const Option = Select.Option
    
    return(
      <Select          
              onChange={value => handleChangeField(value)}
              showSearch
              style={{ width: '100%' }}
              placeholder={(values[name] || fieldHint)}
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