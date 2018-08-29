import React, { Component } from 'react';
import { Layout } from 'antd';
import { Slider } from 'antd';
import CSSLight from './CSSLight'

const { Footer } = Layout;

const formatter = value => {
  return `${value}%`
}

class MainFooter extends Component {

  render() {
    return(
      
        <Footer>
          
          

            <div style={{display: 'flex', direction: 'row'}}>
            
          </div>
        </Footer>
      
    )
  }
}

export default MainFooter;
