import React , { Component } from 'react';
import { CardSSPItems } from './CardSSPItems/CardSSPItems';


class CardSSP extends Component {
  
  render() {
    const { item } = this.props;
    return(
    <div className="cardSSP">
        <div className="cardssp_top" style={{minHeigth: '210px'}}>
          <div className="cardssp_title">
            <h5 >{item.title}</h5>
          </div>
          <div  className="cardssp_img">
            <img src={item.img} alt=""/>
          </div>
          <div className="cardssp_cards">
            {item.cards.map( c => {
              return(
                <span key={c.id}><img src={c.img} alt="alt"/></span>
              )
            })}
          </div>
        </div>
        <div className="cardssp_bottom">
            <div className="cardssp_subtitleBold">
              <strong>{item.subTitleBold}</strong>
            </div>
            <div className="cardssp_subtitle">
              {item.subTitle}
            </div>
            <div className="cardssp_list">
              <ul style={{listStyle: 'none', padding: '0px'}}>
                {item.listItems.map( li => {
                  return(
                    <li key={li.id}>
                      <div style={{display: 'flex', direction: 'row'}}>
                        <div style={{width: '5%'}}><img src={item.checked}  alt="1"/></div>
                        <div style={{width: '90%', marginLeft: '10px'}}>{li.title}</div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
        </div>
        <div className="cardssp_white">
            <div className="cardssp_white_euro">
              <h5>{item.whiteCard.euro}</h5>
            </div>
            <div className="cardssp_white_perMonth">
              <span>{item.whiteCard.perMoth}</span>
            </div>
            <div className="cardssp_white_titles">
              {item.whiteCard.titles.map( title => {
                return(
                  <div key={title.id}>
                    <div>
                      {title.title}
                    </div>
                  </div>
                )
              })}
            </div>
            <div>
              <a href="" className="cardssp_white_link">Request a quotation</a>
            </div>
        </div>
    </div>
    )
  }
}

export default CardSSP;