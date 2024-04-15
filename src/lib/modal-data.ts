import type { Modal } from './types';
import { ModalType } from './types';

/* Bash, Python, Docker, Express.js, SQL, PostgreSQL, WebSockets, Socket.io, Jest, Styled Components, Chakra UI, Bootstrap, SCSS, PostCSS, Rollup, CircleCI, Github Actions, GitLab CI, Datadog, ... */

export const modalData: Modal[] = [
  { /* maybe how many yeras for each skill */
    id: 1,
    title: {EN: 'Programming Languages', DE: 'Programmiersprachen'},
    stack: ['JavaScript (ES6)', 'TypeScript', 'HTML', 'CSS', 'Markdown', 'JSX', ],
    type: ModalType.SKILLS,
  },
  {
    id: 2,
    title: {EN: 'Frameworks & Libraries', DE: 'Frameworks & Libraries'},
    stack: ['React', 'Svelte', 'Next.js', 'Cypress', 'Three.js', 'GraphQL', 'Gatsby.js', 'Tailwind CSS', 'p5.js', 'Dexie.js', 'Mapbox GL JS'],
    type: ModalType.SKILLS,
  },
  {
    id: 3,
    title: {EN: 'Tools & Platforms', DE: 'Tools & Plattformen'},
    stack: ['Git', 'npm', 'Windows', 'Linux', 'Node.js', 'REST API', 'Agile', 'Vite', 'Webpack', 'CI/CD', 'Netlify', 'Vercel'],
    type: ModalType.SKILLS,
  },
  {
    id: 4,
    title: {EN: 'Software', DE: 'Software'},
    stack: ['Rhino3D', 'Grasshopper 3D', 'Blender', 'SketchUp', 'Photoshop', 'Illustrator', 'InDesign', 'Figma'],
    type: ModalType.SKILLS,
  },
  {
    id: 5,
    title: {EN: 'Freelancer', DE: 'Freiberufler*'},
    date: '2022-03 – present',
    duration: {EN: '2 years', DE: '2 Jahre'},
    description: {
      EN: `
        — Development of web applications and websites for clients <br>
        — Collaboration with designers and developers in various projects`, 
      DE: `
        — Entwicklung von Webanwendungen und Websites für Kund*innen <br>
        — Zusammenarbeit mit Designer*innen und Entwickler*innen in verschiedenen Projekten
      `
    },
    type: ModalType.EXPERIENCE,
  },
  {
    id: 5,
    title: {EN: 'Web Programmer @ nota e.V.', DE: 'Web-Programmierer* @ nota e.V.'},
    date: '2022-04 – 2023-12 / Berlin, DE',
    duration: {EN: '1 year 8 months', DE: '1 Jahr 8 Monate'},
    description: {
      EN: `
        — Contribution to UI and front-end functionality of the project <a href="https://nota.space" target="_blank"> nota.space </a> <br>
        — Modern JavaScript programming for a data-driven canvas-based web software with MVC pattern and a custom scripting functionality`, 
      DE: `
        — Beitrag zur Nutzerschnittstelle und Front-End-Funktionalität des Projekts <a href="https://nota.space" target="_blank"> nota.space </a> <br>
        — Moderne JavaScript-Programmierung für eine datengesteuerte Canvas-basierte Web-Software mit MVC-Muster und einer eigenen Scripting-Funktionalität
      `
    },
    type: ModalType.EXPERIENCE,
  },
  {
    id: 6,
    title: {EN: 'Web Designer @ collectAI GmbH', DE: 'Webdesigner* @ collectAI GmbH'},
    date: '2021-07 – 2021-11 / Hamburg, DE',
    duration: {EN: '5 months', DE: '5 Monate'},
    description: {
      EN: `
        — Design and JavaScript development of landing pages, emails and their behavior <br>
        — Working together with managers, designers, and developers through agile workflow`,
      DE: `
        — Gestaltung und JavaScript-Entwicklung von Landingpages, E-Mails <br>
        — Zusammenarbeit mit Manager*innen, Designer*innen und Entwickler*innen durch Agile Workflow
      `
    },
    type: ModalType.EXPERIENCE,
  },
  {
    id: 7,
    title: {EN: 'UI/UX Designer @ Bremer Institut für Produktion und Logistik GmbH (BIBA)', DE: 'UI/UX-Designer* @ Bremer Institut für Produktion und Logistik GmbH (BIBA)'},
    date: '2019-06 – 2021-05 / Bremen, DE',
    duration: {EN: '2 years', DE: '2 Jahre'},
    description: {
      EN: `
        — Research on employing and combining VUIs & GUIs regarding a chatbot app <br>
        — Design and research on developing platform for state machines and SCXML <br>
        — Communicate and collaborate with a team of engineers and designers through agile workflow`,
      DE: `
        — Forschung zur Verwendung und Kombination von GUIs in Bezug auf eine Chatbot-App <br>
        — Gestaltung und Forschung zur Entwicklung einer Plattform für Zustandsautomaten und SCXML <br>
        — Kommunikation und Zusammenarbeit mit einem Team von Ingenieur*innen und Designer*innen durch Agile Workflow
      `
    },
    type: ModalType.EXPERIENCE,
  },
  {
    id: 8,
    title: {EN: '3D modeling & visualization', DE: '3D-Modellierung & Visualisierung'},
    date: '2012 – 2016 / Ankara, TR',
    duration: {EN: '4 years', DE: '4 Jahre'},
    description: {
      EN: `
        — Design, 3D and algorithmic modeling, and visualization for various clients and architecture projects <br>
        — In collaboration with teams of engineers and designers from various disciplines`,
      DE: `
        — Design, 3D- und algorithmische Modellierung und Visualisierung für verschiedene Designbüros und Architekturprojekte <br>
        — In Zusammenarbeit mit Teams von Ingenieur*innen und Designer*innen aus verschiedenen Disziplinen
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