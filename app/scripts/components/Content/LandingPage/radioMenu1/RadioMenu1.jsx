import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';

class RadioMenu1 extends Component {

  state = {
    radioMenu1: true
  }

  handleRadioMenu1 = (e) => {
    e.preventDefault()
    this.setState({
      radioMenu1: !this.state.radioMenu1
    })
    console.log(this.state.radioMenu1)
  }

  render() {
    const { items } = this.props;

    return(
      <div>
       <h5>{items.title}</h5>
       <form action="">
          <div><input type="radio" name='radioMenu1' id="f2f" onChange={this.handleRadioMenu1}/>{items.field1}</div>
          <div><input type="radio" name='radioMenu1' id="ecomerce" onChange={this.handleRadioMenu1}/>{items.field2}</div>
       </form>
      </div>
    )
  }
}

export default RadioMenu1