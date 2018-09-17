import React from 'react'
import { Layout } from 'antd'
import { Row, Col } from 'antd'

import DropDownMenu from './../components/HeaderMenu/DropDownMenu'
import HeaderLinks from './../components/HeaderLinks/HeaderLinks'
import HeaderNavBar from './../components/HeaderNavBar/HeaderNavBar'
import HeaderNavBarSmall from './HeaderNavBar/HeaderNavBarSmall'
import { countries, languages, login } from './HeaderMenu/DropDownMenuItems/DropDownMenuItems'

import Responsive from 'react-responsive'

const Desktop = props => <Responsive {...props} minWidth={992} />
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />
const Mobile = props => <Responsive {...props} maxWidth={767} />


const { Header } = Layout

class MainHeader extends React.PureComponent {
  static propTypes = {
  };


  render() {
    return (

      <Header className="app_header">
        <div>
          <Responsive minWidth={768}>
            <Row className="header_row header_row_responsive">
              <Col md={1} lg={12} />
              <Col md={23} lg={12} sm={0} xs={0}>
                <div className="header_flex_div">
                  <DropDownMenu items={countries} className="header_drop_down_menu" />
                  <DropDownMenu items={languages} className="header_drop_down_menu" />
                  <DropDownMenu items={login} className="header_drop_down_menu" />
                  <HeaderLinks />
                </div>
              </Col>
            </Row>
          </Responsive>
        </div>
        <Row className="header_row" >
          <Col sm={9} xs={9} lg={6} md={1} />
          <Col sm={6} xs={6} lg={3} md={4}><img className="app_header_logo" style={{ width: '80%' }} src="https://www.concardis.com/fileadmin/templates/public/images/logo.svg" alt="" /></Col>
          <Col lg={3} md={4} sm={9} xs={9} />
          <Responsive minWidth={768}>
            <Col lg={12} md={14} sm={0} xs={0}>
              <HeaderNavBar className="header_nav_bar" style={{ marginTop: '15px' }} />
            </Col>
          </Responsive>
        </Row>
        <Mobile>
          <Row className="sandwitch_menu">
            <Col className="header_nav_bar_small" >
              <HeaderNavBarSmall />
            </Col>
          </Row>
        </Mobile>
      </Header>

    )
  }
}

export default MainHeader
