import type { Modal } from './types';
import { ModalType } from './types';

/* Bash, Python, Node.js, Express.js, Socket.io, WebSockets, Jest, Cypress, Styled Components, Chakra UI, Bootstrap, SCSS, PostCSS, Rollup, Docker, CircleCI, GitLab CI, Datadog, ... */

export const modalData: Modal[] = [
  {
    id: 1,
    title: {EN: 'Programming Languages', DE: 'Programmiersprachen'},
    stack: ['JavaScript (ES6)', 'TypeScript', 'HTML', 'CSS', 'Markdown', 'JSX', 'GraphQL'],
    type: ModalType.SKILLS,
  },
  {
    id: 2,
    title: {EN: 'Frameworks & Libraries', DE: 'Frameworks & Libraries'},
    stack: ['React', 'Svelte', 'Next.js', 'Three.js', 'Gatsby.js', 'Tailwind CSS', 'p5.js', 'Dexie.js', 'Mapbox GL JS', 'GSAP', 'Web APIs', 'Framer Motion'],
    type: ModalType.SKILLS,
  },
  {
    id: 3,
    title: {EN: 'Tools & Platforms', DE: 'Tools & Plattformen'},
    stack: ['Git', 'npm', 'Windows', 'Linux', 'Agile', 'Vite', 'Webpack', 'CI/CD', 'Netlify', 'Vercel'],
    type: ModalType.SKILLS,
  },
  {
    id: 4,
    title: {EN: 'Software', DE: 'Software'},
    stack: ['Rhino3D', 'Grasshopper 3D', 'Blender', 'SketchUp', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma'],
    type: ModalType.SKILLS,
  },
  {
    id: 5,
    title: {EN: 'Web Programmer @ nota e.V.', DE: 'Web-Programmierer* @ nota e.V.'},
    date: '2022-04 – 2023-12 / Berlin, DE',
    description: {
      EN: `
        — Contribution to UI and front-end functionality of the project <a href="https://nota.space" target="_blank"> nota.space </a> <br>
        — modern JavaScript programming for p5.js-based software `, 
      DE: `
        — Beitrag zur Nutzerschnittstelle und Front-End-Funktionalität des Projekts <a href="https://nota.space" target="_blank"> nota.space </a> <br>
        — moderne JavaScript-Programmierung für auf p5.js basierende Software
      `
    },
    type: ModalType.EXPERIENCE,
  },
  {
    id: 6,
    title: {EN: 'Web Designer @ collectAI GmbH', DE: 'Webdesigner* @ collectAI GmbH'},
    date: '2021-07 – 2021-11 / Hamburg, DE',
    description: {
      EN: `
        — Design and JavaScript development of landing pages, emails and their behavior `, 
      DE: `
        — Gestaltung und JavaScript-Entwicklung von Landingpages, E-Mails und deren Verhalten
      `
    },
    type: ModalType.EXPERIENCE,
  },
  {
    id: 7,
    title: {EN: 'UI/UX Designer @ Bremer Institut für Produktion und Logistik GmbH (BIBA)', DE: 'UI/UX-Designer* @ Bremer Institut für Produktion und Logistik GmbH (BIBA)'},
    date: '2018-06 – 2021-05 / Bremen, DE',
    description: {
      EN: `
        — Research on employing and combining VUIs & GUIs regarding a chatbot app <br>
        — Design and research on developing platform for state machines and SCXML <br>
        — Communicate and collaborate with a team of engineers and designers `,
      DE: `
        — Forschung zur Verwendung und Kombination von GUIs in Bezug auf eine Chatbot-App <br>
        — Gestaltung und Forschung zur Entwicklung einer Plattform für Zustandsautomaten und SCXML <br>
        — Kommunikation und Zusammenarbeit mit einem Team von Ingenieur*innen und Designer*innen
      `
    },
    type: ModalType.EXPERIENCE,
  },
  {
    id: 8,
    title: {EN: '3D modeling & visualization @ various design firms', DE: '3D-Modellierung & Visualisierung @ verschiedene Designbüros'},
    date: '2012-12 – 2016-06 / Ankara, TR',
    description: {
      EN: `
        — Design, 3D and algorithmic modeling, and visualization for variety of architecture projects in collaboration with teams of engineers and designers `,
      DE: `
        — Design, 3D- und algorithmische Modellierung und Visualisierung für eine Vielzahl von Architekturprojekten in Zusammenarbeit mit Teams von Ingenieur*innen und Designer*innen
      `
    },
    type: ModalType.EXPERIENCE,
  },
  {
    id: 9,
    title: {EN: 'University of Bremen + HfK Bremen', DE: 'Universität Bremen + HfK Bremen'},
    subtitle: {EN: 'Master’s in Digital Media', DE: 'Master-Abschluss in Digitale Medien'},
    date: '2018 – 2023 / Bremen, DE',
    description: {EN: `— Focus on Technology, Theory, and Design`, DE: `— Schwerpunkt auf Technologie, Theorie und Design`},
    type: ModalType.EDUCATION,
  },
  {
    id: 10,
    title: {EN: 'Middle East Technical University', DE: 'Middle East Technical University'},
    subtitle: {EN: 'Bachelor of Architecture', DE: 'Bachelor in Architektur'},
    date: '2009 – 2014 / Ankara, TR',
    description: {EN: `— Focus on Design and technological methods such as CG and Algorithmic Design`, DE: `— Schwerpunkt auf Design und technologischen Methoden wie CG und algorithmisches Design`},
    type: ModalType.EDUCATION,
  }
];