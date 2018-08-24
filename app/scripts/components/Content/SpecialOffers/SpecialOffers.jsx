import React from 'react';

const SpecialOffers = ({ title, content }) => {

    return(
      <div className="content_special_offers">
        <div className="content_flex_row">
          <h2 style={{fontSize: '20px', letterSpacing: '3px'}}>
            {title}
          </h2>
        </div>
        <div className="content_flex_row">
          <p style={{textAlign: 'center', letterSpacing: '3px'}}>
            {content}
          </p>
         </div>
       </div>
    )
}
export default SpecialOffers;