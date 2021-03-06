import React, { Component } from 'react'
import { landingPageItems } from './LandingPageItems/LandingPageItems'
import { Row, Col, Input, Select, Slider, Radio } from 'antd'

const item = landingPageItems
const Option = Select.Option

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
}

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
  handleRadioMenuTrue = (e) => {
    e.preventDefault()
    this.setState({
      radioMenu1: true
    })
  }
  handleRadioMenuFalse = (e) => {
    e.preventDefault()
    this.setState({
      radioMenu1: false
    })
  }

  render() {
    return (
      <div className="landingPage">
        <div className="" style={{ textAlign: 'center' }}>
          <h5>{item.title}</h5>
          <h6 className="landingPage_subTitle">{item.subTitle[0].title}</h6>
          <h6 className="landingPage_subTitle">{item.subTitle[1].title}</h6>
        </div>
        <Row >
          <Col lg={{ span: 6 }} sm={{ span: 24 }} md={{ span: 24 }}>
            <div className="marginTop">
              <div className="landingPage_title_radioMenu1">
                <h5>{item.radioMenu1.title}</h5>
              </div>
              <form action="">
                <div style={{ width: '100%' }}>
                  <Radio.Group defaultValue="a" buttonStyle="solid" onChange={this.handleRadioMenu1}>
                    <div style={{ width: '100%', textAlign: 'center' }}><Radio.Button className="landingPage_antRadio" value="b" onChange={this.handleRadioMenuTrue}>{item.radioMenu1.field1}</Radio.Button></div>
                    <div style={{ width: '100%', textAlign: 'center' }}><Radio.Button className="landingPage_antRadio" value="c" onChange={this.handleRadioMenuFalse}>{item.radioMenu1.field2}</Radio.Button></div>
                  </Radio.Group>
                </div>
              </form>
            </div>
          </Col>
          <Col lg={{ span: 9, offset: 1 }} sm={{ span: 24 }} md={{ span: 24 }}>
            <div className="marginTop">
              <div className="landingPage_title_radioMenu2"><h5>{item.radioMenu2.title}</h5></div>
              <form action="">
                <div style={{ width: '100%' }}>
                  <Radio.Group defaultValue="a" buttonStyle="solid">
                    <div style={{ width: '100%', textAlign: 'center' }}><Radio.Button className="landingPage_antRadio" disabled={this.state.radioMenu1} value="a">{item.radioMenu2.field1}</Radio.Button></div>
                    <div style={{ width: '100%', textAlign: 'center' }}><Radio.Button className="landingPage_antRadio" disabled={this.state.radioMenu1} value="b">{item.radioMenu2.field2}</Radio.Button></div>
                    <div style={{ width: '100%', textAlign: 'center' }}><Radio.Button className="landingPage_antRadio" disabled={!this.state.radioMenu1} value="c">{item.radioMenu2.field3}</Radio.Button></div>
                  </Radio.Group>
                </div>
              </form>
            </div>
          </Col>
          <Col lg={{ span: 6, offset: 1 }} sm={{ span: 24 }} md={{ span: 24 }}>
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
                {item.dropDownMenu.items.map(i => (
                  <Option value={i.title} key={i.id}>{i.title}</Option>
                ))}
              </Select>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 11 }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>
            <div className="marginTop">
              <div className="landingPage_slider1_titel">
                <h5>{item.slider1.title}</h5>
              </div>
              <div className="landingPage_slider1_subTitle">
                <h6>{item.slider1.subTitle}</h6>
              </div>
              <div>
                <Slider step={25} marks={marks} />
              </div>
            </div>
          </Col>
          <Col lg={{ span: 11, offset: 1 }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>
            <div className="marginTop">
              <div className="landingPage_slider2_titel">
                <h5>{item.slider2.title}</h5>
              </div>
              <div className="landingPage_slider2_subTitle">
                <h6>{item.slider2.subTitle}</h6>
              </div>
              <div style={{ fontSize: '10px' }}>
                <Slider step={50} marks={marks2} />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            className="marginTop" lg={{ span: 6, offset: 9 }} md={{ span: 6, offset: 9 }} sm={{ span: 4, offset: 10 }}
            xs={{ span: 10, offset: 7 }}
          >
            <div style={{ textAlign: 'center' }}>
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

export default LandingPage
