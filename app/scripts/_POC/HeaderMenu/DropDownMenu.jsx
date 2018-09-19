import React, { Component } from 'react'
import { Menu, Dropdown, Icon } from 'antd'
import Responsive from 'react-responsive'

const Mobile = props => <Responsive {...props} maxWidth={767} />

class HeaderDropDown extends Component {
  state = {
    stateMenu: true
  }

  handleClickMenu = () => {
    this.setState({
      stateMenu: !this.state.stateMenu
    })
  }

  render() {
    const menu = (
      <Menu>
        {this.props.items.map(item => (
          <Menu.Item key={item.id}>
            <a href="#">{item.title}</a>
          </Menu.Item>
        ))}
      </Menu>
    )
    return (
      <div>
        <Responsive minWidth={576}><Dropdown className="header_drop_down" overlay={menu} trigger={['click']}>
          <div className="header_flex_div drop_down_margin">
            <div onClick={this.handleClickMenu}>
              <a className="ant-dropdown-link header_drop_down_link" href="#">
                {this.props.items[0].title}
                {this.state.stateMenu
                  ? <Icon className="header_drop_down_icon" type="down" style={{ width: '20px' }} />
                  : <Icon className="header_drop_down_icon" type="up" style={{ width: '20px' }} />}
              </a>
            </div>
          </div>
                                   </Dropdown>
        </Responsive>
        <Responsive maxWidth={576}><Dropdown className="header_drop_down" overlay={menu} trigger={['click']}>
          <div className="header_flex_div" style={{ justifyContent: 'space-between', padding: '0px' }}>
            <div onClick={this.handleClickMenu} style={{ width: '100%' }} className="drop_down_sandwitch">
              <a className="ant-dropdown-link header_drop_down_link" href="#" style={{ width: '100%', backGroundCOlor: '#fff', fontSize: '14px' }}>
                {this.props.items[0].title}
                {this.state.stateMenu
                  ? <Icon className="header_drop_down_icon" type="down" style={{ width: '20px', float: 'right' }} />
                  : <Icon className="header_drop_down_icon" type="up" style={{ width: '20px', float: 'right' }} />}
              </a>
            </div>
          </div>
                                   </Dropdown>
        </Responsive>
      </div>
    )
  }
}

export default HeaderDropDown
