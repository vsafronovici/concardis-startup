import React, { Component } from 'react';
import { Layout } from 'antd';
import { Slider } from 'antd';

const { Footer } = Layout;

const formatter = value => {
  return `${value}%`
}

class MainFooter extends Component {

  render() {
    return(
      
        <Footer>
          
          <h2>Footer</h2>

          <div style={{display: 'flex', direction: 'row'}}>
            
            
          </div>
        </Footer>
      
    )
  }
}

export default MainFooter;
