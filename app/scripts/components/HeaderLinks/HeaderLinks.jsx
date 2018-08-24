import React, { Component } from 'react';

export const links = [
    {title: 'Company', id: '1'}, 
    {title: 'Press', id: '2'}, 
    {title: 'Career', id: '3'}, 
    {title: 'Support', id: '4'}
  ]

class HeaderLinks extends Component {

  render() {
    return(
      <div className="header_flex_div">
        {links.map( link => {
          return(
            <div key={link.id}>
              <a href="#" className="header_links">{link.title}</a>
            </div>
          )
        })}
      </div>
    )
  }
}

export default HeaderLinks;