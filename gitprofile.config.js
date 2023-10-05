// gitprofile.config.js

const config = {
  github: {
    username: 'MauricioMTejada', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ["MauricioMTejada", "Henry-Repaso", "Apuntes", "Borrar-Repositorio2", "borrar-repositorio"], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'mauricio-tejada-495aa4a8',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'mauriciotejada14@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1upUl98TrLeHN1TNgtjpvk6F4C6OSgu5-/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
  'JavaScript',
  'Html',
  'Css',
  'NodeJS',
  'React',
  'Material UI',
  'Redux',
  'Express',
  'PostgreSQL'
  ],
  experiences: [
    {
      company: 'Academic project',
      position: 'Fullstack web developer',
      from: 'May 2023',
      to: 'June 2023',
      companyLink: '',
    },
    {
      company: 'Academic project',
      position: 'Fullstack web developer',
      from: 'Abril 2023',
      to: 'May 2023',
      companyLink: '',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Henry',
      degree: 'Fullstack Web Developer',
      from: 'February 2023',
      to: 'June 2023',
    },
    {
      institution: 'UTN FRM',
      degree: 'Electronics technician',
      from: '2011',
      to: '2014',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Timbring',
      description:
        'Servicio de entrega para Mercadolibre',
      imageUrl: 'https://i.ibb.co/R679mJS/logo.jpg',
      link: 'https://www.timbring.com',
    },
    {
      title: 'Ingenia',
      description:
        'Compra y vende cursos digitales',
      imageUrl: 'https://i.ibb.co/PGHMs7H/2023-07-03-13-53-41-Ingenia-Compra-y-Vende-cursos-digitales-1360p-60fps-VP9-160kbit-Opus-webm-R.jpg',
      link: 'https://client-six-weld.vercel.app',
    },
    {
      title: 'Tarjeta-QR',
      description:
        'Ejemplo de tarjeta con QR',
      imageUrl: 'https://i.ibb.co/8s7YgCF/imagen-2023-09-29-124242229.png',
      link: 'https://tarjeta-reactform-reactqr.vercel.app',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'mauriciomtejada', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
