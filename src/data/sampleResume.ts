import { ResumeData } from '../types/resume';

export const nirubamaResume: ResumeData = {
  profile: {
    id: '1',
    fullName: 'NIRUBAMA SRI R',
    email: 'nirubamasrirgmail.com',
    phone: '+91 9342840231',
    githubUrl: 'https://github.com/Nirubamasri-CSE',
    linkedinUrl: 'https://www.linkedin.com/in/nirubama-sri-r-408723227',
  },
  education: [
    {
      id: '1',
      degree: 'B.E.(CSE)',
      institution: 'Sri Eshwar College of Engineering',
      score: 'CGPA: 7.5',
      startYear: '2021',
      endYear: '2025',
    },
    {
      id: '2',
      degree: 'HSC',
      institution: 'Noble Matriculation Hr. Sec. School',
      score: '84.2%',
      startYear: '2020',
      endYear: '2021',
    },
    {
      id: '3',
      degree: 'SSLC',
      institution: 'Saint Francis De Sales Matriculation Hr. Sec. School',
      score: '77.2%',
      startYear: '2018',
      endYear: '2019',
    },
  ],
  internships: [
    {
      id: '1',
      company: 'Squash Apps Private Ltd',
      role: 'Full Stack Developer Intern',
      description:
        'Completed a 4-month internship as a Full Stack Developer Intern at Squash App Pvt. Ltd., where I contributed to real-world projects involving both frontend and backend development. This experience strengthened my technical expertise, problem-solving skills, and understanding of industry practices, while also enhancing teamwork, adaptability, and professional communication.',
      startDate: 'May 2025',
      endDate: 'Sep 2025',
    },
    {
      id: '2',
      company: 'The Better Tomorrow',
      role: 'MERN Stack Developer',
      description:
        "Contributed significantly to front-end development using React.js, designing intuitive interfaces to optimize user experiences. Supported back-end operations with Node.js and Express.js, implementing RESTful API's and streamlining data management processes. Project: Task Management Application",
      startDate: '2023',
      endDate: '2023',
    },
    {
      id: '3',
      company: '1CloudHub',
      role: 'AWS & DevOps',
      description:
        'Effectively managed AWS infrastructure, deploying and maintaining virtual servers, storage solutions, and networking components. Demonstrated proficiency with EC2, S3 designing solutions to meet project requirements and optimize performance.',
      startDate: '2023',
      endDate: '2023',
    },
  ],
  projects: [
    {
      id: '1',
      title: 'Tourism Management System',
      description:
        'The Tourism Management System uses HTML, CSS, JavaScript, and MongoDB for seamless travel planning. It features secure authentication, CRUD operations for bookings, real-time updates, and a Bootstrap-based responsive UI. Developed in VS Code, it ensures an efficient and user-friendly experience.',
      technologies: 'HTML, CSS, MongoDB, VS code, JavaScript',
      year: '2023',
    },
    {
      id: '2',
      title: 'Task Management Application',
      description:
        'The MERN Stack Task Management Application utilizes CSS and MERN Stack to streamline task organization. The React-based frontend provides a responsive UI, while Node.js and Express.js handle backend operations. MongoDB ensures efficient task storage and retrieval, enabling seamless tracking and management.',
      technologies: 'CSS, React Js, Node Js, Express Js, Mongo DB',
      year: '2023',
    },
    {
      id: '3',
      title: 'Traffic Flow Prediction Using LSTM & GRU',
      description:
        'Developed a traffic flow prediction system using LSTM and GRU in Python and Google Colab. Integrated GPS, road sensor, and weather data for accurate forecasting. Enhanced urban mobility by optimizing traffic management with deep learning models and real-time analytics.',
      technologies: 'Machine Learning, Deep Learning (LSTM, GRU), Python, Google Colab',
      year: '2024',
    },
    {
      id: '4',
      title: 'Utilizing Capsule Networks for Road Signal Identifier',
      description:
        'Developed a Capsule Network using Python and TensorFlow on the GTSRB dataset to classify traffic signs. Achieved high accuracy by effectively handling rotations and overlaps, outperforming conventional CNN models in real-world recognition tasks.',
      technologies: 'Deep Learning, Python & TensorFlow (GTSRB Dataset)',
      year: '2025',
    },
  ],
  skills: [
    {
      id: '1',
      category: 'Programming Languages',
      skillsList: 'Java | OOPS | DBMS | Python',
    },
    {
      id: '2',
      category: 'Web Technologies',
      skillsList: 'HTML5 | CSS3',
    },
    {
      id: '3',
      category: 'Tools',
      skillsList: 'Figma | Canva | VS code',
    },
  ],
  codingPlatforms: [
    {
      id: '1',
      platform: 'LeetCode',
      profileUrl: 'https://leetcode.com/u/Nirubamasri/',
      rank: 'Rank: 399641',
      problemsSolved: '250+ Problems',
    },
    {
      id: '2',
      platform: 'HackerRank',
      profileUrl: 'https://www.hackerrank.com/profile/nirubamasri_r201',
      rank: 'Rank: 8140',
      problemsSolved: '70+ problems',
    },
  ],
  certifications: [
    {
      id: '1',
      title: 'UI/UX design bootcamp from ThisUX',
      issuer: 'ThisUX',
      year: '2023',
    },
    {
      id: '2',
      title: 'JAVA programming beginner to master',
      issuer: 'UDEMY (Abdul Bari)',
      year: '2022',
    },
    {
      id: '3',
      title: 'Mastering data structures and Algorithms using C',
      issuer: 'UDEMY (Abdul Bari)',
      year: '2022',
    },
    {
      id: '4',
      title: 'SQL course gained strong knowledge in basic concepts',
      issuer: 'Skill Rack, Hacker Rank, Solo Learning',
      year: '2022',
    },
  ],
};