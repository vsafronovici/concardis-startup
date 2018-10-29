import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'antd'

const style = {
  border: '1px solid #000',
  borderRadius: '2px',
  width: '30px',
  heigth: '30px'
}

class CheckBoxField extends Component {
  state = {
    checked: false
  }

  handleCheckBox = (value) => {
    this.setState({
      checked: !this.state.checked
    })
    this.props.onChange(value)
  }

  render() {
    const { checked } = this.state

    return (
      <div>
        <div className={style} onClick={() => this.handleCheckBox(checked)}>
          {!checked ? <Icon type="check" theme="outlined" className="ef-checkbox-check" /> : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CheckBoxField)
