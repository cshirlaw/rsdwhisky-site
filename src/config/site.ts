export const SITE = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'RSD Whisky',
  brand: {
    accent: '#0A2A4A',           // deep navy
    subaccent: '#B78E5C',        // warm gold (for subtle highlights)
    logo: '/images/brand/rsd-logo.svg',
    cityTag: 'Edinburgh — Home of Scotch Whisky',
  },
  links: {
    errolWings: 'https://errol-wings-site.vercel.app/',
    stuartDouglas: 'https://stuart-douglas-site.vercel.app/',
  },
  contact: {
    company: 'RSD Whisky Limited',
    address: '5 Lochside Way, Edinburgh EH12 9DT',
    email: 'c.shirlaw@rsdwhisky.com',
    telOffice: '+44 131 659 9829',
    telMobile: '+44 7831 495 163',
  },
  quotes: [
    {
      text: 'There is a complexity there, but again it’s all very well integrated – all the aromas are knitted together, as should be the case in a good blended Scotch Whisky.',
      author: 'Charlie MacLean',
      role: 'Internationally acclaimed Scotch Whisky connoisseur',
      on: 'Stuart Douglas whisky',
    },
  ],
};
