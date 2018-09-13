import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'antd'
import { stepSelector } from './../../../../selectors/configurator-selector'

import { changeFieldValue } from '../../../../actions/configurator-action'

class CheckBoxField extends Component {

 render() {
  
  const { handleChange, checked } = this.props
  console.log('checkBoxChecked', checked)

  return(
   <div>
    <div className="ef-checkbox-container" onClick={handleChange}>
          {!checked ? <Icon type="check" theme="outlined" className="ef-checkbox-check"/> : null}
        </div>
   </div>
  )
 }
}

const mapStateToProps = state => ({
 changeFieldValue,
 step: stepSelector(state)
})

const mapDispatchToProps = state => ({
 
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxField)