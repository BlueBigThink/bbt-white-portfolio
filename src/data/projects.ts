export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image?: string;
  images: string[]
  date: string;
  desc: string;
}

const data: Project[] = [
  {
    title: 'Blogchain.us',
    subtitle: 'Blockchain’s #1 Web3 Platform',
    link: 'https://blogchain.us',
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
    title: 'modelvi',
    subtitle: 'Effortless Multi-Platform Automation',
    link: 'https://modelvi.com/',
    images: ['/images/projects/modelvi/1.JPG',
            '/images/projects/modelvi/2.JPG',
            '/images/projects/modelvi/3.JPG',
            '/images/projects/modelvi/4.JPG',
            '/images/projects/modelvi/5.JPG',
            '/images/projects/modelvi/6.JPG',
            '/images/projects/modelvi/7.JPG',
            '/images/projects/modelvi/8.jpg',
            '/images/projects/modelvi/9.JPG'],
    date: '2025-01-20',
    desc:
      'modelvi.com is an all-in-one platform that makes automating your content across multiple channels simple and stress-free. It helps you reach a wider audience, keep your fans engaged, and save countless hours on repetitive tasks. With streamlined tools designed specifically for models and agencies, managing your workflow has never been easier. By working smarter, you can consistently grow your presence and earn $10–15K every month.',
  },
  {
    title: 'creatorhub',
    subtitle: 'Social of fans',
    link: 'http://creatorhub.vip',
    images: ['/images/projects/ch/1.JPG',
            '/images/projects/ch/2.JPG',
            '/images/projects/ch/3.JPG',
            '/images/projects/ch/4.JPG',
            '/images/projects/ch/5.JPG',
            '/images/projects/ch/6.JPG',
            '/images/projects/ch/7.JPG',
            '/images/projects/ch/8.JPG',
            '/images/projects/ch/9.JPG'],
    date: '2024-11-20',
    desc:
      'CreatorHub.vip isn’t limited to just one platform. You can link and promote profiles from OnlyFans, Fansly, f2f, FanCentro, 4based, and Maloum—all in one place. This makes it the ultimate solution for creators managing multiple accounts.',
  },
  {
    title: 'doubleit casino',
    subtitle: 'A convolutional neural network to classify cats! (and dogs)',
    image: '/images/projects/catdetector.jpg',
    images: ['/images/projects/catdetector.jpg','/images/projects/catdetector.jpg'],
    date: '2024-10-01',
    desc:
      'Trained a convolutional neural network to classify between ~ 80 cats breeds. ' +
      'Over 60,000 cats were classified before server bills made the project too expensive ' +
      'to continue hosting.',
  },
];

export default data;
