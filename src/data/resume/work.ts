/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'ElectriCity Tech Ltd',
    position: 'Head of Development / Co-founder',
    url: 'https://promptfoo.dev',
    startDate: '2023-02-01',
    highlights: [
      'Developed Blogchain.us (Next + Express + Mongodb + Redis), Blogchain app (ReactNative), Doubleit.casino (React + Express + Mongodb)',
      'Collaborated with advisors and key stakeholders to identify opportunities for cost optimization, leading to a 20% reduction in platform development expenses',
      'Successfully implemented a secure and efficient payment system based on Stripe/Nowpayments.io, enabling seamless transactions and boosting customer satisfaction',
      'Developed and maintained scalable RESTful APIs to support various functionalities of the platform',
      'Conducted thorough code reviews and provided constructive feedback to team members, fostering a culture of continuous improvement and code quality',
    ],
  },
  {
    name: 'Gigantonline',
    position: 'Web developer',
    url: 'https://gigantonline.com',
    startDate: '2024-08-01',
    endDate: '2025-07-01',
    highlights: [
      'Developed Modelvi.com (Next + Mongodb + Playwright), Creatorhub.vip (Next + Mongodb), Proxygigant.com (Next + Mongodb)',
      'Developed an automated posting engine using Playwright, enabling seamless content distribution across five social media platforms, including Fansly, OnlyFans, and F2F',
      'Implemented a secure and efficient payment system using NowPayments.io, enabling seamless transactions and significantly improving customer satisfaction',
      'Developed and maintained scalable RESTful APIs to support diverse platform functionalities, including an integrated affiliate system',
      'Monitored and analyzed platform traffic to enhance performance and implement effective SEO strategies for improved visibility and user engagement',
    ],
  },
  {
    name: 'Definationlabs.io',
    position: 'Blockchain Developer',
    url: 'http://Definationlabs.io',
    startDate: '2023-05-01',
    endDate: '2024-08-01',
    highlights: [
      'Developed a Telegram Trading Bot / Telegram Casino Bot that seamlessly interacts with the EVM / Solana, providing users with a user-friendly platform to play casino games and manage their funds',
      'Utilized web3py, PostgreSQL and Python (Django) frameworks to build the DApps that integrate with the EVM, enhancing the overall functionality and user experience of the applications',
      'Designed, implemented, and deployed secure and audited casino smart contracts (Solidity) on the Ethereum blockchain, ensuring the fairness and transparency of gaming operations',
      'Conducted extensive testing and debugging of smart contracts and DApps to identify and fix potential vulnerabilities, ensuring the safety of user assets and data',
    ],
  },
  {
    name: 'Moonhub.ai',
    position: 'Front-End Developer',
    url: 'https://Moonhub.ai',
    startDate: '2022-10-01',
    endDate: '2023-03-01',
    highlights: [
      'Developed and launched Landing and Portal websites, utilizing React.js with TypeScript, Vue.js, and FastAPI, resulting in enhanced user engagement and improved user experience',
      'Implemented a frontend search project, enabling users to search and retrieve relevant information more efficiently',
      'Contributed to the successful development of an AI Chrome extension, integrating AI algorithms into the browser, improving user productivity and experience',
      'Collaborated with two separate development teams on four new project designs and feature improvements, ensuring seamless integration and adherence to project timelines',
      'Utilized user-experience reporting to identify areas for improvement, leading to the suggestion and implementation of 15 enhancements in product design and functionality',
      'Architected, implemented, and maintained 2 performant and scalable data-processing back-end systems, optimizing data handling and analysis for complex projects',
    ],
  },
  {
    name: 'GreedP2E.io',
    position: 'FrontEnd / Unity3D /Web3 Developer',
    url: 'https://GreedP2E.io',
    startDate: '2020-06-01',
    endDate: '2021-04-01',
    highlights: [
      'Developed an engaging landing page and a P2E Metaverse shooting game, integrating blockchain mechanics and immersive user experiences',
      'Proficient in React.js (TS) for building dynamic, scalable front-end applications and Unity3D (C#) / Solidity for creating interactive gaming environments',
      'Experienced in developing standalone game tools, optimizing workflows, and enhancing game development pipelines',
      'Collaborated on the Complexity Score tool, which removed process bottlenecks by assigning scores to cost, time, and compliance issues, increasing efficiency',
    ],
  },
  {
    name: 'TechTIQ Solutions',
    position: 'Web Developer',
    url: 'https://techtiqsolutions.com/',
    startDate: '2017-11-01',
    endDate: '2020-04-01',
    highlights: [
      'Composed front-end and back-end structure',
      'Built admin panel UI and customer & stylist sites from given mockup',
      'Designed and implemented the UX',
      'Configured flexible customer sign-up steps with fashion style info',
      'Collaborated with the team members on production issues',
      'Took initiative and developed approaches and solutions to software problems',
      'Tested code using various techniques, including manual and automated unit tests',
      'Maintained code integrity, branches, and migration within source control',
    ],
  },
];

export default work;
