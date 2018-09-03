import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import SandwitchMenu from './SandwitchMenu/SandwitchMenu'

import { Collapse } from 'antd';

const icons = ['  1  ', '  2  ', '  3  ', '  4  ']

const Panel = Collapse.Panel;

function callback(key) {
  
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const SubMenu = Menu.SubMenu;

const style = {
  transition: "heigth 3s"
}

class HeaderNavBarSmall extends Component {
  
  state = {
    open: false,
    transitions: false
  }


  handlerSandwitchMenu = () => {
    this.setState({
      open: !this.state.open
    })

  }

  render() {
    return(
      <div>
        <div className="header_flex_div" style={{position: 'relative', backGroundColor: 'transparent'}}>
          <div className="header_flex_direction" style={{display: 'flex', direction: 'row', position: 'absolute', zIndex: '999'}}>
              {icons.map( (icon, i) => {
                return(
                  <div key={i}>{icon}</div>
                )
              })}
          </div>
        </div>
        <div>
          <Collapse className="sandwitch_transparent" defaultActiveKey={['0']} onChange={callback} style={{border: 'none', position: 'relative'}}>
          
            <Panel className="sandwitch_transparent"  header={<div style={{position: 'absolute', top: '0px', right: '0px'}}>Menu</div>} key="1" showArrow={false} >
            
            <SandwitchMenu />
            
          </Panel>
        </Collapse>
        </div>
        
      </div>
    )
  }
}


export default HeaderNavBarSmall;