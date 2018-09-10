import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { Row, Col, Carousel } from 'antd';
import MainCarousel from './Content/Carousel';
import SpecialOffers from './Content/SpecialOffers/SpecialOffers';
import { itemsSpecialOffers } from './Content/SpecialOffers/SpecialOffersItems/SpecialOffersItems';
import CardsSection from './Content/CardsSection/CardsSection';
import LandingPage from './Content/LandingPage/LandingPage';
import ShowSolutionPage from './Content/ShowSolutionPage/ShowSOlutionPage';

const { Content } = Layout;

class MainContent extends Component {

  state = {
    landingPage: true
  }

  toggleLandinPage = () => {
    this.setState({
      landingPage: !this.state.landingPage
    })
  }

  render() {
    return(
        <Content>
          <Row>
            <Col span={24}>
              <MainCarousel effect="fade" />              
            </Col>
          </Row>
          {
            !this.state.landingPage 
          ? <ShowSolutionPage toggleLandingPage={this.toggleLandinPage}/>
          : <Row>
              <Col lg={{span: 24 }} xs={{span: 24}} sm={{span: 24}} md={{span: 24}} xl={{span: 16, offset: 4}}>
                <LandingPage toggleLandingPage={this.toggleLandinPage}/>
              </Col>
            </Row>
          }
        </Content>
    )
  }
}


export default MainContent;