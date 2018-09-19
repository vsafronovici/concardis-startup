import React, { Component } from 'react'
import { carouselItems, formatTitle } from './CarouselInnerItems/CarouselInnerItems'


class CarouselInnerItem extends Component {
  render() {
    const { id, title, content, buttonTxt } = this.props
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="carousel_inner_item">
          <div>
            <h2 className="h2-mobile">{title[0]}</h2>
            <h3 className="h2-mobile"><strong>{title[1]}</strong></h3>
            {content ?
              <p>
                {content[0]}<br />{content[1]}
              </p>
              : ''}
            <a className="carousel_inner_item_button" href={buttonTxt}>
              {buttonTxt}
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default CarouselInnerItem
