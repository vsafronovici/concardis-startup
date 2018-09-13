import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'antd'

class CheckBoxField extends Component {

 state = {
  checked: true
}

 handleCheckBox = (value) => {
  this.setState({
   checked: !this.state.checked
 })
  this.props.handleChange(value)
 }

 render() {
  const { checked } = this.state
  console.log('checkBoxChecked', checked)

  return(
   <div>
    <div className="ef-checkbox-container" onClick={() => this.handleCheckBox(checked)}>
          {!checked ? <Icon type="check" theme="outlined" className="ef-checkbox-check"/> : null}
    </div>
   </div>
  )
 }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = state => ({
 
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxField)