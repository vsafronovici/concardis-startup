import React, { Component } from 'react';
import { landingPageItems } from './LandingPageItems/LandingPageItems';
import { Row, Col, Input, Select, Slider } from 'antd';

const item = landingPageItems;
const Option = Select.Option;

const marks = {
  0: {
    style: {
      color: '#9E9E9E',
      fontSize: '9px'
    },
    label: <strong>  1.000€</strong>,
  },
  25: {
    style: {
      color: '#9E9E9E',
      fontSize: '9px'
    },
    label: <strong> 15.000€</strong>,
  },
  50: {
    style: {
      color: '#9E9E9E',
      fontSize: '9px'
    },
    label: <strong> 50.000€</strong>,
  },
  75: {
    style: {
      color: '#9E9E9E',
      fontSize: '9px'
    },
    label: <strong> 100.000€</strong>,
  },
  100: {
    style: {
      color: '#9E9E9E',
      fontSize: '9px'
    },
    label: <strong>> 100.000€</strong>,
  },
};

const marks2 = {
  0: {
    style: {
      color: '#9E9E9E',
      fontSize: '9px'
    },
    label: <strong>  0 - 500</strong>,
  },
  50: {
    style: {
      color: '#9E9E9E',
      fontSize: '9px'
    },
    label: <strong> 500 - 1.000</strong>,
  },
  100: {
    style: {
      color: '#9E9E9E',
      fontSize: '9px'
    },
    label: <strong> > 1.000</strong>,
  }
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}
class LandingPage extends Component {

  state = {
    radioMenu1: true
  }

  handleRadioMenu1 = (e) => {
    e.preventDefault()
    this.setState({
      radioMenu1: !this.state.radioMenu1
    })
  }

  render() {
    
    return(
      <div className='landingPage'>
        <div className="" style={{textAlign: 'center'}}>
          <h5>{item.title}</h5>
          <h6 className="landingPage_subTitle">{item.subTitle[0].title}</h6>
          <h6 className="landingPage_subTitle">{item.subTitle[1].title}</h6>
        </div>
        <Row  >
          <Col lg={{span: 6}} sm={{span: 24}} md={{span: 24}}>
            <div className="marginTop">
              <div className="landingPage_title_radioMenu1">
                <h5>{item.radioMenu1.title}</h5>
              </div>
              <form action="">
                  <div className="landingPage_radio2"><Input type="radio" name='radioMenu1' id="f2f" onChange={this.handleRadioMenu1}/>{item.radioMenu1.field1}</div>
                  <div className="landingPage_radio2"><Input type="radio" name='radioMenu1' id="ecomerce" onChange={this.handleRadioMenu1}/>{item.radioMenu1.field2}</div>
              </form>
            </div>
          </Col>
          <Col lg={{span: 6}} sm={{span: 24}} md={{span: 24}}>
            <div className="marginTop">
              <div className="landingPage_title_radioMenu2"><h5>{item.radioMenu2.title}</h5></div>
              <form action="">
                  <div className="landingPage_radio2"><Input type="radio" name='radioMenu2' id="1" disabled={this.state.radioMenu1}/>{item.radioMenu2.field1}</div>
                  <div className="landingPage_radio2"><Input type="radio" name='radioMenu2' id="2" disabled={this.state.radioMenu1}/>{item.radioMenu2.field2}</div>
                  <div className="landingPage_radio2"><Input type="radio" name='radioMenu2' id="3" disabled={!this.state.radioMenu1}/>{item.radioMenu2.field3}</div>
              </form>
            </div>
          </Col>
          <Col lg={{span: 6, offset: 4}} sm={{span: 24}} md={{span: 24}}>
            <div className="marginTop">
              <div>
                <div className="landingPage_dropDownMenu_title"><h5>{item.dropDownMenu.title}</h5></div>
              </div>
            <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Select a person"
                  optionFilterProp="children"
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                {item.dropDownMenu.items.map( i => {
                  return(
                    <Option value={i.title} key={i.id}>{i.title}</Option>
                  )
                })}
              </Select>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{span: 11}} xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                <div className="marginTop">
                  <div className="landingPage_slider1_titel">
                    <h5>{item.slider1.title}</h5>
                  </div>
                  <div className="landingPage_slider1_subTitle">
                    <h6>{item.slider1.subTitle}</h6>
                  </div>
                  <div>
                    <Slider step={25} marks={marks}/>
                  </div>
                </div>
          </Col>
          <Col lg={{span: 11, offset: 1}} xs={{span: 24}} sm={{span: 24}} md={{span: 24}}>
                <div className="marginTop">
                  <div className="landingPage_slider2_titel">
                    <h5>{item.slider2.title}</h5>
                  </div>
                  <div className="landingPage_slider2_subTitle">
                    <h6>{item.slider2.subTitle}</h6>
                  </div>
                  <div style={{fontSize: '10px'}}>
                    <Slider step={50} marks={marks2}/>
                  </div>
                </div>
          </Col>
        </Row>
        <Row>
          <Col className="marginTop" lg={{span:6, offset: 9}} md={{span:6, offset: 9}} sm={{span:4, offset: 10}} xs={{span: 10, offset:7}}>
              <div style={{textAlign: 'center'}}>
                <button onClick={this.props.toggleLandingPage} className="landingPage_link">
                  {item.link}
                </button>
              </div>
          </Col>
        </Row>
      </div>
    )
  }
  
}

export default LandingPage;