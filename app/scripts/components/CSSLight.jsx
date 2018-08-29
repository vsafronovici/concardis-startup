import React, { Component } from 'react';

class CSSLight extends Component {

  render() {
    return(
      <div className="light-main-container">
        <div className="light-container-titles">
          <div>
            <h2 className="light-black-title"> Title </h2>
            <h3 className="light-grey-subtitle"> Subtitle </h3>
          </div>
        </div>
        <div className="light-cotnainer-menus">
          <div className="light-radio-menu">
            <h5 className="light-orange-title">
              YOUR SALES CHANNEL
            </h5>
          </div>
        
        </div>
        <div>
          <a className="light-orange-button" href="#">Show solution</a>
        </div>
        <div className="light-orange-title">
          TEST TEST TEST
        </div>

        <div className="light-card-top-part">
          <div className="light-card-title-top">
              TEST TEST 
          </div>
          <div className="light-card-img-top">
            <img src="https://www.cashforless.de/img/products/verifone-vx680-500x500.png" alt=""/>
          </div>

          
              <img className="light-card-cards-img-top" src="https://www.concardis.com/fileadmin/redakteur/images/Markenlogos/mastercard.png" alt=""/>
          
              <div className="light-card-title-middle">
                title middle
          </div>
          <div className="light-card-subTitle-middle">
               subtitle middle
          </div>
          <div className="light-card-price-bottom">
              Euro 90.0
          </div>
          <div className="light-card-perMonth-bottom">
          perMonth
          </div>
          <div className="light-card-titles-bottom">
          titles
          </div>
          <div>
            <a href="#" className="light-card-button-bottom" >test button</a>
          </div>
        </div>
          
      </div>
      
    )
  }
}

export default CSSLight;