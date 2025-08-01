export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  images: string[]
  date: string;
  desc: string;
}

const data: Project[] = [
  {
    title: 'Blogchain.us',
    subtitle: 'Blockchain’s #1 Web3 Platform',
    image: '/images/projects/nearestdollar.jpg',
    images: ['/images/projects/blogchain/1.JPG',
            '/images/projects/blogchain/2.JPG',
            '/images/projects/blogchain/3.JPG',
            '/images/projects/blogchain/4.JPG',
            '/images/projects/blogchain/5.JPG',
            '/images/projects/blogchain/6.JPG',
            '/images/projects/blogchain/7.JPG',
            '/images/projects/blogchain/8.JPG',
            '/images/projects/blogchain/9.JPG',
            '/images/projects/blogchain/10.JPG'],
    date: '2025-05-01',
    desc:
      'Blogchain is the web3.0 platform that operates in crypto with features like posting, live streaming, marketplace, trading…etc. There are plenty of issues that Blogchain fixes, first helps major businesses open themselves to a new market of people, less taxes intertwined with potential good investments, fast payments, everything is decentralized, people can earn in crypto instead of FIAT currencies which ties to taxes. Please visit blogchain for the details',
  },
  {
    title: 'Harvest',
    subtitle: 'Won 3rd. place in 2015 Techcrunch Disrupt SF Hackathon',
    link: 'https://devpost.com/software/harvest',
    image: '/images/projects/harvest.jpg',
    images: ['/images/projects/harvest.jpg','/images/projects/harvest.jpg','/images/projects/harvest.jpg'],
    date: '2015-09-20',
    desc:
      'Won ~ $7000 in prizes for an advanced, low cost monitoring solution ' +
      'for crops. Harvest was designed to catch irrigation leaks, overwatering, ' +
      'and nutrient deficiencies at an affordable price for the developing world.',
  },
  {
    title: 'Space Potato',
    subtitle: 'A kickstarter funded potato powered weather balloon.',
    link: 'http://www.spacepotato.org',
    image: '/images/projects/spacepotato.jpg',
    images: ['/images/projects/spacepotato.jpg','/images/projects/spacepotato.jpg'],
    date: '2015-06-28',
    desc:
      'Launched a potato battery powered weather balloon with two cameras ' +
      'and gps transponder. Resulting photos were published in a coffee table book. ' +
      'You can email me for a copy.',
  },
  {
    title: 'Cat Detector',
    subtitle: 'A convolutional neural network to classify cats! (and dogs)',
    image: '/images/projects/catdetector.jpg',
    images: ['/images/projects/catdetector.jpg','/images/projects/catdetector.jpg'],
    date: '2015-05-15',
    desc:
      'Trained a convolutional neural network to classify between ~ 80 cats breeds. ' +
      'Over 60,000 cats were classified before server bills made the project too expensive ' +
      'to continue hosting.',
  },
];

export default data;
