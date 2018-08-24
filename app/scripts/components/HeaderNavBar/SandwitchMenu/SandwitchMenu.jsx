import React, { Component } from 'react';
import { Menu, Icon } from 'antd'
import findSolutionItems from './items/FindSolutionItem';
import ourProducts from './items/ourProducts';
import services from './items/services';
import { links } from './../../HeaderLinks/HeaderLinks'
import DropDownMenu from './../../HeaderMenu/DropDownMenu';
import { countries, languages, login } from './../../HeaderMenu/DropDownMenuItems/DropDownMenuItems';

const SubMenu = Menu.SubMenu;
SubMenu.className = "submenu_title";

const MenuItemGroup = Menu.ItemGroup;

class SandwitchMenu extends Component {
  
  render() {
    const open = this.props.open;
    return (
      <div>
          <div className="sandwitch_transparent submenu_title ">
            <Menu
            mode="inline"
            style={{border: 'none', backGroundColor: 'transparent'}}
          
          >
            <SubMenu stylekey="sub1" title={<span>FINDING SOLUTION</span>} className="sandwitch_transparent submenu_title">
                {findSolutionItems.map( item => {
                  return(
                    <Menu.Item key={item.id}>{item.title}</Menu.Item>
                  )
                })}
            </SubMenu>
            <SubMenu  stylekey="sub1" title={<span>OUR PRODUCTS</span>} className="sandwitch_transparent submenu_title" style={{paddingLeft: "0px"}}>              
              {ourProducts.map( product => {
                return(
                  <Menu.Item key={product.id}>{product.title}</Menu.Item>
                )
              })}
            </SubMenu>
            <SubMenu  stylekey="sub1" title={<span>SERVICES</span>} className="sandwitch_transparent submenu_title">    
                {services.map( service => {
                  return(
                    <Menu.Item key={service.id}>{service.title}</Menu.Item>
                  )
                })}
            </SubMenu>
            {links.map( link => {
              return(
                <Menu.Item key={link.id}>
                  {link.title}
                </Menu.Item>
              )
            })}
            

          </Menu>
          
        </div>
        <div>
          <DropDownMenu className="header_drop_down_sandwich" items={countries}/>
          <DropDownMenu className="header_drop_down_sandwich" items={languages}/>
          <DropDownMenu className="header_drop_down_sandwich" items={login}/>
        </div>
      </div>

    );
  }
}

export default SandwitchMenu