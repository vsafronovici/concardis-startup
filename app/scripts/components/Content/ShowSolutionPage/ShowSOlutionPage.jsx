import React, { Component } from 'react';
import { Row, Col } from 'antd';
import CardSSP from './CardSSP/CardSSP';
import { CardSSPItems } from './CardSSP/CardSSPItems/CardSSPItems';

class ShowSolutionPage extends Component {

    render() {
      return(
        <div>
          <Row>
            <Col lg={{span: 22, offset: 1}} md={{span: 24}} xl={{span: 18, offset: 3}}>
              <Row>
                {CardSSPItems.map( card => {
                  return(
                    <Col key={card.id} lg={{span: 8}} md={{span: 8}} sm={{span: 24}} xs={{span: 24}}>
                       <CardSSP item={card} key={card.id + 1}/>
                    </Col>
                  )
                })}
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xl={{span: 4, offset: 10}} xs={{span: 24}} sm={{span: 24}} md={{span: 4, offset: 10}}>
                <div style={{textAlign: 'center'}}>
                  <button className="cardssp_white_link_back" onClick={this.props.toggleLandingPage}>
                    Go back
                  </button>
                </div>
            </Col>
          </Row>
        </div>
      )
    }
}

export default ShowSolutionPage