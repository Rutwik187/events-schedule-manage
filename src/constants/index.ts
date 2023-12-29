export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'News Room',
      route: '/news',
    },
    {
      label: 'Teams',
      route: '/teams',
    },
    {
      label: 'Contact Us',
      route: '/contact-us',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }
  