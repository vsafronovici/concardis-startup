import React from 'react'


const Card = ({ item }) => (
  <div className="content_cardsSection_card">
    <div>
      <h6 style={{ fontSize: '12px' }}>{item.title}</h6>
    </div>
    <div style={{ textAlign: 'center' }}>
      <img src={item.img} alt="img" className="card_img" />
    </div>
    <div className="card_subTitle" >
      <strong>{item.subTitleBold}</strong>
    </div>
    <div className="card_subTitle" >
      {item.titleList}
    </div>
    <div className="card_list" >
      <ul>
        {item.listItems.map(listItem => (
          <li key={listItem.id}>
            <div style={{ display: 'flex', direction: 'row' }}>
              <div style={{ width: '10%' }}><img style={{ width: '25px' }} className="card_checked_img" src={item.checkedImg} alt="checked" /></div>
              <div style={{ marginLeft: '10px', width: '90%' }}>{listItem.title}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div className="card_euro" style={{ textAlign: 'center' }}>
      <h3>{item.euro}</h3>
    </div>
    <div className="card_perMonth">
      {item.perMonth.map((pM, i) => (
        <div key={i}>
          {pM}
        </div>
      ))}
    </div>
    <div style={{ textAlign: 'center', marginTop: '7px' }}>
      <a className="card_button" style={{ color: '#fff' }} href="#">{item.button}</a>
    </div>
  </div>
)

export default Card
