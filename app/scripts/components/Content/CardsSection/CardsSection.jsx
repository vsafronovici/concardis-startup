import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Card from './Card/Card'
import { cardItems } from './Card/CardItems/CardItems'
// class CardsSection extends Component {

//   render() {
//     // <div className="content_cards_section">
//     //   Cards Section
//     // </div>
//     <div>
//       a
//       </div>
//   }
// }
const CardsSection = () => (
  <div className="content_cardsSection_cardSection">
    <Row>
      {cardItems.map(card => (
        <Col
          lg={{ span: 6 }} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}
          key={card.id}
        >
          <Card item={card} />
        </Col>
      ))}
    </Row>
  </div>
)
export default CardsSection
