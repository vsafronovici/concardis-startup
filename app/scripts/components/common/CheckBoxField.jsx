import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'

const style = {
  border: '1px solid #000',
  borderRadius: '2px',
  width: '30px',
  heigth: '30px'
}

export default class CheckBoxField extends Component {
  state = {
    checked: false
  }

  static propTypes = {
    onChange: PropTypes.func
  }

  handleCheckBox = (value) => {
    this.setState({ checked: !this.state.checked })
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
