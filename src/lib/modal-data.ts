import type { Modal } from './types';
import { ModalType } from './types';

/* Bash • Python • Node.js • Express.js • Socket.io • WebSockets • Jest • Cypress • Styled Components • Chakra UI • Bootstrap • SCSS • PostCSS • Rollup • Docker • CircleCI • GitLab CI • Datadog  */

export const modalData: Modal[] = [
  {
    id: 1,
    title: 'Programming Languages',
    description: `JavaScript (ES6) • TypeScript • HTML • CSS • Markdown • JSX • GraphQL`,
    type: ModalType.SKILLS,
  },
  {
    id: 2,
    title: 'Frameworks & Libraries',
    description: `React • Svelte • Next.js • Gatsby.js • Three.js • Tailwind CSS • p5.js • Dexie.js • Mapbox GL JS • GSAP • Framer Motion • Web APIs • CSS Modules`,
    type: ModalType.SKILLS,
  },
  {
    id: 3,
    title: 'Tools & Platforms',
    description: `Git • npm • Vite • Webpack • Netlify • Vercel • CI/CD • Agile • Windows • Linux`,
    type: ModalType.SKILLS,
  },
  {
    id: 4,
    title: 'Software',
    description: `Rhino3D · Grasshopper 3D · Blender · Figma · SketchUp · Adobe Photoshop · Adobe Illustrator · Adobe InDesign · DaVinci Resolve`,
    type: ModalType.SKILLS,
  },
  {
    id: 5,
    title: 'Web Programmer @ nota e.V.',
    date: '2022-04 – 2023-12 / Berlin, DE',
    description: `
      — Contribution to UI and front-end functionality of the project <a href="https://nota.space" target="_blank"> nota.space </a> <br>
      — modern JavaScript programming for p5.js-based software
    `,
    type: ModalType.EXPERIENCE,
  },
  {
    id: 6,
    title: 'Web Designer @ collectAI GmbH',
    date: '2021-07 – 2021-11 / Hamburg, DE',
    description: `
      — Design and JavaScript development of landing pages, emails and their behavior
    `,
    type: ModalType.EXPERIENCE,
  },
  {
    id: 7,
    title: 'UI/UX Designer @ Bremer Institut für Produktion und Logistik GmbH (BIBA)',
    date: '2018-06 – 2021-05 / Bremen, DE',
    description: `
      — Research on employing and combining VUIs & GUIs regarding a chatbot app <br>
      — Design and research on developing platform for state machines and SCXML <br>
      — Communicate and collaborate with a team of engineers and designers
    `,
    type: ModalType.EXPERIENCE,
  },
  {
    id: 8,
    title: '3D modeling & visualization @ various design firms',
    date: '2012-12 – 2016-06 / Ankara, TR',
    description: `
      — Design, 3D and algorithmic modeling, and visualization for variety of architectural projects in collaboration with a group of engineers and designers
    `,
    type: ModalType.EXPERIENCE,
  },
  {
    id: 9,
    title: 'University of Bremen + HfK Bremen',
    subtitle: 'Master’s in Digital Media',
    date: '2018 – 2023 / Bremen, DE',
    description: `— Focus on Technology, Theory, and Design`,
    type: ModalType.EDUCATION,
  },
  {
    id: 10,
    title: 'Middle East Technical University',
    subtitle: 'Master’s in Digital Media',
    date: '2009 – 2014 / Ankara, TR',
    description: `— Focus on Design and technological methods such as CG and Algorithmic Design`,
    type: ModalType.EDUCATION,
  }
];