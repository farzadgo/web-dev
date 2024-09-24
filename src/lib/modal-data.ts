import type { Modal } from './types';
import { ModalType } from './types';

/* Bash, Python, Docker, Express.js, SQL, PostgreSQL, WebSockets, Socket.io, Jest, Chakra UI, Bootstrap, SCSS, PostCSS, Rollup, CircleCI, Github Actions, GitLab CI, Datadog, ... */

export const modalData: Modal[] = [
  {
    id: 12,
    title: {EN: 'Programming Languages', DE: 'Programmiersprachen'},
    stack: ['JavaScript (ES6)', 'TypeScript', 'Dart', 'HTML', '[S]CSS', 'Markdown', 'JSX'],
    type: ModalType.SKILLS,
  },
  {
    id: 11,
    title: {EN: 'Frameworks & Libraries', DE: 'Frameworks & Libraries'},
    stack: ['React', 'Svelte', 'Next.js', 'Flutter', 'Cypress', 'Three.js', 'GraphQL', 'Gatsby.js', 'Tailwind CSS', 'p5.js', 'Dexie.js', 'Mapbox GL JS', 'Styled Components'],
    type: ModalType.SKILLS,
  },
  {
    id: 10,
    title: {EN: 'Tools & Platforms', DE: 'Tools & Plattformen'},
    stack: ['Git', 'npm', 'Windows', 'Linux', 'Node.js', 'REST API', 'Kanban', 'Jira', 'Vite', 'Webpack', 'CI/CD', 'Netlify', 'Vercel'],
    type: ModalType.SKILLS,
  },
  {
    id: 9,
    title: {EN: 'Software', DE: 'Software'},
    stack: ['Rhino3D', 'Grasshopper 3D', 'Blender', 'SketchUp', 'Photoshop', 'Illustrator', 'InDesign', 'Figma'],
    type: ModalType.SKILLS,
  },
  {
    id: 8,
    title: {EN: 'Frontend Software Developer @ engram GmbH', DE: 'Frontend Software Entwickler* @ engram GmbH'},
    date: '2024-08 – present / Bremen, DE',
    duration: {EN: '2 months', DE: '2 Monate'},
    description: {
      EN: `
        — Frontend development of enterprise apps through pair programming, code refactoring, fixing bugs, implementing new features <br>
        — Part of a large engineering team practicing Kanban-based Agile development via Atlassian ecosystem (Jira, Bitbucket) extending to a Continuous Integration environment <br>
        — Actively engage in code reviews, engineering rounds, & knowledge sharing to foster a collaborative learning-oriented environment`, 
      DE: `
        — Frontend-Entwicklung von Unternehmensanwendungen durch Pair Programming, Code-Refactoring, Bugfixing und Implementierung neuer Funktionen <br>
        — Teil eines großen Engineering-Teams, das Kanban-basierte Agile-Entwicklungsmethoden über das Atlassian-Ökosystem (Jira, Bitbucket) in einer Continuous-Integration-Umgebung praktiziert <br>
        — Aktive Teilnahme an Code-Reviews, Engineering-Runden und Wissensaustausch zur Förderung einer kollaborativen, lernorientierten Umgebung
      `
    },
    type: ModalType.EXPERIENCE,
  },
  {
    id: 7,
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
    id: 6,
    title: {EN: 'Web Programmer @ nota e.V.', DE: 'Web-Programmierer* @ nota e.V.'},
    date: '2022-04 – 2023-12 / Berlin, DE',
    duration: {EN: '1 year 8 months', DE: '1 Jahr 8 Monate'},
    description: {
      EN: `
        — Frontend development of a functional interface that ensures smooth and enjoyable user experience for the software <a href="https://nota.space" target="_blank"> nota.space </a> <br>
        — Modern JavaScript and HTML5 programming for a full-stack, dynamic, and canvas-based web software with MVC pattern and custom scripting functionality for canvas elements <br>
        — Collaborative Git-based version control to bugfix and add new features, as well as code commenting and reviews for knowledge sharing`, 
      DE: `
        — Frontend-Entwicklung einer funktionalen Benutzeroberfläche, die eine reibungslose und angenehme Benutzererfahrung für die Software <a href="https://nota.space" target="_blank"> nota.space</a> gewährleistet <br>
        — Programmierung mit modernem JavaScript und HTML5 für eine Full-Stack, dynamische, Canvas-basierte Websoftware mit MVC-Muster und benutzerdefinierter Skriptfunktionalität für Canvas-Elemente <br>
        — Zusammenarbeit mit Git-basierter Versionskontrolle zur Fehlerbehebung und zum Hinzufügen neuer Funktionen, einschließlich Codekommentierung und -überprüfung für den Wissensaustausch
      `
    },
    type: ModalType.EXPERIENCE,
  },
  {
    id: 5,
    title: {EN: 'Web Designer @ collectAI GmbH', DE: 'Webdesigner* @ collectAI GmbH'},
    date: '2021-07 – 2021-11 / Hamburg, DE',
    duration: {EN: '5 months', DE: '5 Monate'},
    description: {
      EN: `
        — Responsive design and development of payment landing pages for various enterprises as customers <br>
        — An ecosystem ranging from Figma to building with HTML/CSS and programming interactions with modern JavaScript <br>
        — Collaborate with designers and product managers to create cutting-edge solutions via Agile methodologies using Jira`,
      DE: `
        — Responsives Design und Entwicklung von Zahlungs-Landingpages für verschiedene Unternehmen als Kunden <br>
        — Ein Ökosystem von Figma bis hin zur Entwicklung mit HTML/CSS und Programmierung von Interaktionen mit modernem JavaScript <br>
        — Zusammenarbeit mit Designer*innen und Produktmanager*innen zur Schaffung innovativer Lösungen mittels agiler Methoden über Jira
      `
    },
    type: ModalType.EXPERIENCE,
  },
  {
    id: 4,
    title: {EN: 'UI/UX Designer @ Bremer Institut für Produktion und Logistik GmbH (BIBA)', DE: 'UI/UX-Designer* @ Bremer Institut für Produktion und Logistik GmbH (BIBA)'},
    date: '2019-06 – 2021-05 / Bremen, DE',
    duration: {EN: '2 years', DE: '2 Jahre'},
    description: {
      EN: `
        — Research and design voice- and graphical user interface regarding an award-winning chatbot app <br>
        — Design and research for the development of a GUI-based platform for state machines and SCXML <br>
        — Communicate and collaborate with a team of engineers & designers through Agile workflow (Jira)`,
      DE: `
        — Forschung und Design von Sprach- und grafischen Benutzeroberflächen für eine preisgekrönte Chatbot-App <br>
        — Design und Forschung für die Entwicklung einer GUI-basierten Plattform für Zustandsautomaten und SCXML <br>
        — Kommunikation und Zusammenarbeit mit einem Team von Ingenieur*innen und Designer*innen durch agiles Workflow (Jira)
      `
    },
    type: ModalType.EXPERIENCE,
  },
  {
    id: 3,
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
    id: 2,
    title: {EN: 'University of Bremen + HfK Bremen', DE: 'Universität Bremen + HfK Bremen'},
    subtitle: {EN: 'Master’s in Digital Media', DE: 'Master-Abschluss in Digitale Medien'},
    date: '2018 – 2023 / Bremen, DE',
    description: {EN: `— Focus on Technology, Theory, and Design`, DE: `— Schwerpunkt auf Technologie, Theorie und Design`},
    type: ModalType.EDUCATION,
  },
  {
    id: 1,
    title: {EN: 'Middle East Technical University', DE: 'Middle East Technical University'},
    subtitle: {EN: 'Bachelor of Architecture', DE: 'Bachelor in Architektur'},
    date: '2009 – 2014 / Ankara, TR',
    description: {EN: `— Focus on Design and technological methods such as CG and Algorithmic Design`, DE: `— Schwerpunkt auf Design und technologischen Methoden wie CG und algorithmisches Design`},
    type: ModalType.EDUCATION,
  }
];