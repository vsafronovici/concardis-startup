
export const carouselItems = [
  { id: '100',
    title: ['Everything about payments -', 'easy, secure, personal'],
    content: ['Wether credit cards payments, ecommerce or mobile payment -', 'Concardis is yout payment expert !'],
    buttonTxt: 'Find the perfect solution',
  },
   {
     id: '101',
     title: ['All Banks. One Partner.', 'The new payment method for the ecommerce'],
     content: '',
     buttonTxt: 'More',
   }
]


export const formatTitle = (obj) => {
  obj.title = obj.title.indexOf('-') ? obj.title.split(':') : obj.title;

  return obj.title;
}

