const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://nicholasmerritt-acc.github.io/',
  title: 'NM',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Nick Merritt',
  role: 'Game Designer',
  picture: 'https://media.licdn.com/dms/image/v2/D5635AQEScGBVNkBzlQ/profile-framedphoto-shrink_800_800/B56ZcobcDuGsAg-/0/1748729971251?e=1779508800&v=beta&t=UBFTFk_X8UIKyqEaE6KAAopA9qnJ8ruFOwFnIpe4GLE',

  description:
    'I am an aspiring game designer, a former software developer, and a lifelong gamer. I am pursuing a degree in Game Design from Austin Community College. Here are a few of my favorite projects!',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/nicholas-merritt-b26086b3/',
    github: 'https://github.com/nicholasmerritt-acc',
  },
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Ludus Madness',
    description:
      'RTS gladiator training mayhem game',
    stack: ['Unity', '3DS Max', 'Photoshop', 'Substance Painter'],
    sourceCode: 'https://github.com/nicholasmerritt-acc/ludus_madness',
    livePreview: 'https://play.unity.com/en/games/0f82f1a8-579e-45e2-89d2-c287009c0d14/ludus-madness',
    image: 'ludus.png',
  },
  {
    name: 'ChessBot 9000',
    description:
      'Game Design Document for a chess-themed deckbuilding board game',
    stack: ['Google Docs'],
    livePreview: 'https://docs.google.com/document/d/1pcOqa2vaTHDbXUIKopm_3zgZvoGlTcoE5qEdjYUnNIc/edit?usp=sharing',
    image: 'cards-2',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up

  'Unity',
  '3DS Max',
  'Photoshop',
  'Substance Painter',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nicholas.merritt@g.austincc.edu',
}

export { header, about, projects, skills, contact }
