import React, { Component } from 'react'
import { Menu } from 'antd'


const links = [{ title: 'FINDING SOLUTION', id: '10' }, { title: 'OUR PRODUCTS', id: '11' }, { title: 'SERVICES', id: '12' }]

class HeaderNavBar extends Component {
  state = {
    current: 'mail',
  }

  render() {
    return (
      <div className="header_flex_div header_nav_bar" style={{ marginTop: '15px' }}>
        {links.map(link => (
          <div key={link.id}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">{link.title}</a>
              </Menu.Item>
            </Menu>
          </div>
        ))}
      </div>
    )
  }
}

export default HeaderNavBar
