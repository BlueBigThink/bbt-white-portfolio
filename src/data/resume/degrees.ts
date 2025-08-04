export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Singapore Management University',
    degree: 'B.S. Computer Science',
    link: 'https://www.smu.edu.sg/',
    year: 2014,
  },
];

export default degrees;
