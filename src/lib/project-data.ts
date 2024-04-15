import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: {EN: '<i>Netzwerk Zwischennutzung</i> Website', DE: '<i>Netzwerk Zwischennutzung</i> Website'},
    date: '2023-10',
    endDate: '2024-01',
    liveUrl: 'https://netzwerkzwischennutzung.de/',
    codeUrl: 'https://github.com/guidaGG/NZN-frontend/',
    stack: ['Svelte', 'TypeScript', 'GraphQL', 'Strapi', 'Mapbox GL JS', 'Tailwind CSS', 'Strapi', 'Responsive Design'],
    images: [
      {
        id: 1,
        alt: 'nzn-desktop-1',
        url: 'https://cloud.disorient.xyz/s/M6qtZsrAdKoxgna/download/nzn-desktop-01_.jpg',
      },
      {
        id: 2,
        alt: 'nzn-desktop-2',
        url: 'https://cloud.disorient.xyz/s/6myPbNbpXpJ5jCj/download/nzn-desktop-02_.jpg',
      },
      {
        id: 3,
        alt: 'nzn-mobile-1',
        url: 'https://cloud.disorient.xyz/s/f9zCNKPczgwq4T8/download/nzn-mobile-02.png',
      },
      {
        id: 4,
        alt: 'nzn-mobile-2',
        url: 'https://cloud.disorient.xyz/s/RocTai5DoBf58a5/download/nzn-mobile-01.png',
      },
    ],
    employer: 'AAA GmbH',
    designer: 'Bas&Aer Design Studio',
    description: {
      EN: 'The website was co-developed with Guida Ribeiro for the <i>Netzwerk Zwischennutzung</i> project, which is a platform regarding temporary use of vacant/unused spaces in Germany',
      DE: 'Die Website wurde zusammen mit Guida Ribeiro für das Projekt <i>Netzwerk Zwischennutzung</i> entwickelt, das eine Plattform für die temporäre Nutzung von leerstehenden Räumen in Deutschland darstellt'
    },
  },
  {
    id: 2,
    title: {EN: '<i>Endless Twist</i> Open Access Publication', DE: '<i>Endless Twist</i> Open Access Veröffentlichung'},
    date: '2023-12',
    liveUrl: 'https://endlesstwist.xyz/publication/',
    codeUrl: 'https://github.com/farzadgo/endless-twist/tree/main/publication',
    stack: ['TypeScript', 'Vite', 'CSS', 'Responsive Design', 'Jamstack'],
    images: [
      {
        id: 1,
        alt: 'et-pub_desktop-1',
        url: 'https://cloud.disorient.xyz/s/KHcLLKmks7QgMPq/download/et-pub_desktop-01.png',
      },
      {
        id: 2,
        alt: 'et-pub_desktop-2',
        url: 'https://cloud.disorient.xyz/s/qTYeb54zHyjw9BW/download/et-pub_desktop-02.png',
      },
      {
        id: 3,
        alt: 'et-pub_desktop-3',
        url: 'https://cloud.disorient.xyz/s/mYG6zYpgkrMHG34/download/et-pub_desktop-03.png',
      },
      {
        id: 4,
        alt: 'et-pub_mobile-1',
        url: 'https://cloud.disorient.xyz/s/tozSSGKQTHyXZAw/download/et-pub_mobile-01.png',
      },
      {
        id: 5,
        alt: 'et-pub_mobile-2',
        url: 'https://cloud.disorient.xyz/s/aRKqqz4ZiC33RMc/download/et-pub_mobile-02.png',
      },
    ],
  },
  {
    id: 3,
    title: {EN: 'nota.space', DE: 'nota.space'},
    date: '2022-04',
    endDate: '2023-12',
    liveUrl: 'https://nota.space/',
    codeUrl: 'https://gitlab.com/nota.space/nota-frontend',
    stack: ['JavaScript', 'p5.js', 'HTML', 'Django', 'PostgreSQL', 'Docker', 'Webpack'],
    images: [
      {
        id: 1,
        alt: 'nota-desktop-1',
        url: 'https://cloud.disorient.xyz/s/SRgZf35q2sA63zs/download/nota-space-01.png',
      },
      {
        id: 2,
        alt: 'nota-desktop-2',
        url: 'https://cloud.disorient.xyz/s/cRb5x4wY77mdNGE/download/nota-space-02.png',
      },
    ],
    employer: 'nota e.V.',
    description: {
      EN: 'Contribution to UI and frontend functionality of the project <i>nota.space</i> which is a data-driven canvas-based modern JavaScript software with MVC pattern and a custom scripting functionality',
      DE: 'Beitrag zur UI und Frontend-Funktionalität des Projekts <i>nota.space</i>, einer datengesteuerten, Canvas-basierten, modernen JavaScript-Software mit MVC-Pattern und einer eigenen Scripting-Funktionalität'
    }
  },
  {
    id: 4,
    title: {EN: 'Website for the project "moyo"', DE: 'Website für das Projekt “moyo”'},
    date: '2023-10',
    liveUrl: 'https://moyo-bremen.space/',
    codeUrl: 'https://github.com/farzadgo/moyo-bremen',
    stack: ['Next.js', 'React', 'CSS', 'Responsive Design', 'Framer Motion', 'Jamstack'],
    images: [
      {
        id: 1,
        alt: 'moyo-desktop-1',
        url: 'https://cloud.disorient.xyz/s/iaPfjQ4ZSrceTRZ/download/moyo-01.jpg',
      },
      {
        id: 2,
        alt: 'moyo-desktop-2',
        url: 'https://cloud.disorient.xyz/s/MzpWFxK5c3Tbdw6/download/moyo-03.jpg',
      },
      {
        id: 3,
        alt: 'moyo-desktop-3',
        url: 'https://cloud.disorient.xyz/s/Bax8WEb6z8XP7sP/download/moyo-02.jpg',
      },
      {
        id: 4,
        alt: 'moyo-mobile-1',
        url: 'https://cloud.disorient.xyz/s/sxWBFPnnGYHLqQ9/download/moyo-mobile-01.png',
      },
      {
        id: 5,
        alt: 'moyo-mobile-2',
        url: 'https://cloud.disorient.xyz/s/8qkTC4oCtxwfETt/download/moyo-mobile-02.png',
      },
      {
        id: 6,
        alt: 'moyo-mobile-3',
        url: 'https://cloud.disorient.xyz/s/6eME3wepKqdWQPi/download/moyo-mobile-03.png',
      },
    ],
    employer: 'perspActives e.V.',
  },
  {
    id: 5,
    title: {EN: 'Website for the project <i>MINE</i>', DE: 'Website für das Projekt <i>MINE</i>'},
    date: '2023-08',
    liveUrl: 'https://notyet.quest/',
    codeUrl: 'https://github.com/farzadgo/notyet.quest/',
    stack: ['Next.js', 'React', 'CSS', 'Jamstack'],
    images: [
      {
        id: 1,
        alt: 'notyet-mine-desktop',
        url: 'https://cloud.disorient.xyz/s/PtGK4EJmxQXtwwQ/download/mine-desktop.jpg',
      },
      {
        id: 2,
        alt: 'notyet-mine-mobile',
        url: 'https://cloud.disorient.xyz/s/cHG6sakWY6wXLjL/download/mine-mobile.png',
      },
    ],
  },
  {
    id: 6,
    title: {EN: 'Portfolio Website for G. Valdespino', DE: 'Portfolio-Website für G. Valdespino'},
    date: '2023-06',
    liveUrl: 'https://gvaldespino.xyz/',
    codeUrl: 'https://github.com/farzadgo/gabi-portfolio',
    stack: ['Next.js', 'PDF rendering', 'CSS', 'Jamstack'],
    images: [
      {
        id: 1,
        alt: 'gvaldespino-desktop',
        url: 'https://cloud.disorient.xyz/s/ds42QBay8oaiKtr/download/gabb-desktop.jpg',
      },
      {
        id: 2,
        alt: 'gvaldespino-mobile',
        url: 'https://cloud.disorient.xyz/s/PpT2Bc5DXqtcgPL/download/gabb-mobile.png',
      },
    ],
  },
  {
    id: 7,
    title: {EN: '<i>Endless Twist</i> Mixed Media Website', DE: '<i>Endless Twist</i> Mixed-Media Website'},
    date: '2023-01',
    endDate: '2023-10',
    liveUrl: 'https://endlesstwist.xyz/',
    codeUrl: 'https://github.com/farzadgo/endless-twist/',
    stack: ['TypeScript', 'HTML5', 'WebGL', 'Three.js', 'Vite', 'Blender', 'Jamstack'],
    images: [
      {
        id: 1,
        alt: 'endless-twist-01',
        url: 'https://cloud.disorient.xyz/s/i94Tns5c2FALGAj/download/endlestwist-04.jpg',
      },
      {
        id: 2,
        alt: 'endless-twist-02',
        url: 'https://cloud.disorient.xyz/s/MRPkWy9TccWxqrz/download/endlestwist-01.jpg',
      },
      {
        id: 3,
        alt: 'endless-twist-03',
        url: 'https://cloud.disorient.xyz/s/3oa7wtKkZMb4dWf/download/endlestwist-03.jpg',
      },
      {
        id: 4,
        alt: 'endless-twist-04',
        url: 'https://cloud.disorient.xyz/s/jmTnfLyB59cDJpX/download/endlestwist-02.jpg',
      },
    ],
    description: {
      EN: 'Part of Farzad\'s artistic research project submitted in partial fulfillment of the requirements for the degree of Master of Arts at the University of the Arts Bremen.',
      DE: 'Teil von Farzads künstlerischem Forschungsprojekt, das zur Erlangung des Grades Master of Arts an der Hochschule für Künste Bremen eingereicht wurde.'
    },
  },
  {
    id: 8,
    title: {EN: 'Website for the project <i>RESTORE_</i>', DE: 'Website für das Projekt <i>RESTORE_</i>'},
    date: '2022-03',
    endDate: '2022-07',
    liveUrl: 'https://restore-bremen.space/',
    codeUrl: 'https://github.com/farzadgo/RESTORE_/',
    stack: ['Next.js', 'React', 'Three.js', 'CSS', 'Mapbox GL JS', 'Responsive Design', 'Blender', 'Jamstack'],
    images: [
      {
        id: 1,
        alt: 'restore-desktop-01',
        url: 'https://cloud.disorient.xyz/s/ET7opkQzqAkf3PK/download/restore-desktop-01.jpg',
      },
      {
        id: 2,
        alt: 'restore-desktop-02',
        url: 'https://cloud.disorient.xyz/s/wSaTnCkEHi94oTX/download/restore-desktop-02.jpg',
      },
      {
        id: 3,
        alt: 'restore-desktop-03',
        url: 'https://cloud.disorient.xyz/s/ypPdFzYnqg73bgW/download/restore-desktop-03.jpg',
      },
      {
        id: 4,
        alt: 'restore-mobile-01',
        url: 'https://cloud.disorient.xyz/s/EmmDieyEBtZZ5DS/download/restore-mobile-01.png',
      },
      {
        id: 5,
        alt: 'restore-mobile-02',
        url: 'https://cloud.disorient.xyz/s/i9iZCdsLSL5w87N/download/restore-mobile-02.png',
      },
    ],
    employer: 'Hacer Sitio collective',
    designer: 'Gabriel Valdespino & Farzad Golghasemi',
  },
  {
    id: 9,
    title: {EN: 'Berlin Public Transport Demo App', DE: 'Berlin VBB Demo-Anwendung'},
    date: '2021-07',
    liveUrl: 'https://vbb-transport-demo.netlify.app/',
    codeUrl: 'https://github.com/farzadgo/transport-app',
    stack: ['React', 'Axios', 'CSS', 'REST API', 'Web Storage API'],
  },
  {
    id: 10,
    title: {EN: 'Personal Portfolio Website (current)', DE: 'Persönliche Portfolio-Website (aktuell)'},
    date: '2021-05',
    endDate: '...',
    liveUrl: 'https://fagosemi.xyz/',
    codeUrl: 'https://github.com/farzadgo/v2',
    stack: ['Gatsby', 'React', 'GraphQL', 'Three.js', 'CSS', 'Responsive Design', 'Jamstack'],
  },
  {
    id: 11,
    title: {EN: '<i>Adrift</i> Walking App (React version)', DE: '<i>Adrift</i> Walking App (React-Version)'},
    date: '2021-01',
    endDate: '2021-04',
    liveUrl: 'https://adrift.city/',
    codeUrl: 'https://github.com/farzadgo/adrift-react',
    stack: ['React', 'React Router', 'Dexie.js', 'CSS', 'PWA', 'Jamstack'],
    images: [
      {
        id: 1,
        alt: 'adrift-01',
        url: 'https://cloud.disorient.xyz/s/H3kF7nZS7aJdW33/download/adrift-01.png',
      },
      {
        id: 2,
        alt: 'adrift-02',
        url: 'https://cloud.disorient.xyz/s/nZcgkjEcLmtks29/download/adrift-02.png',
      },
      {
        id: 3,
        alt: 'adrift-03',
        url: 'https://cloud.disorient.xyz/s/9GAT8JykrLJMsdo/download/adrift-03.png',
      },
      {
        id: 4,
        alt: 'adrift-04',
        url: 'https://cloud.disorient.xyz/s/aBrJBqGbCmc72fa/download/adrift-04.png',
      },
      {
        id: 5,
        alt: 'adrift-05',
        url: 'https://cloud.disorient.xyz/s/s8LoEPt4R6Hwkec/download/adrift-05.pngg',
      },
      {
        id: 6,
        alt: 'adrift-06',
        url: 'https://cloud.disorient.xyz/s/AtKtsojxXMN7Tec/download/adrift-06.png',
      },
      {
        id: 7,
        alt: 'adrift-07',
        url: 'https://cloud.disorient.xyz/s/bMGy42dgJDcMymG/download/adrift-07.png',
      },
    ],
  },
  {
    id: 12,
    title: {EN: 'Showcase Website for Carla', DE: 'Vorzeige-Website für Carla'},
    date: '2020-07',
    liveUrl: 'https://farzadgo.github.io/carla-anacker/',
    codeUrl: 'https://github.com/farzadgo/carla-anacker',
    stack: ['HTML', 'CSS', 'JavaScript', 'SVG'],
  },
  {
    id: 13,
    title: {EN: '<i>Adrift</i> Walking App (JS version)', DE: '<i>Adrift</i> Walking App (JS-Version)'},
    date: '2020-02',
    endDate: '2020-06',
    liveUrl: 'https://farzadgo.github.io/adrift-js/',
    codeUrl: 'https://github.com/farzadgo/adrift-js',
    stack: ['JavaScript', 'SPA', 'CSS', 'Media Recording API'],
  },
  {
    id: 14,
    title: {EN: 'Personal Portfolio Website (legacy)', DE: 'Persönliche Portfolio-Website (alt)'},
    date: '2019-02',
    endDate: '2019-05',
    liveUrl: 'https://farzadgo.github.io/v1/',
    codeUrl: 'https://github.com/farzadgo/v1',
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'p5.js'],
  },
];
