import React, { Component } from 'react'
import { Carousel } from 'antd'
import CarouselInnerItem from './CarouselInnerItem/CarouselInnerItem'
import { carouselItems } from './CarouselInnerItem/CarouselInnerItems/CarouselInnerItems'

class MainCarousel extends Component {
  render() {
    return (
      <Carousel autoplay effect="fade" easing="5">
        {carouselItems.map(item => (
          <div key={item.id} className="content_carousel_item" style={{ display: 'flex' }}>
            <CarouselInnerItem title={item.title} content={item.content} buttonTxt={item.buttonTxt} />
          </div>
        ))}
      </Carousel>
    )
  }
}

export default MainCarousel
