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
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Ludus',
    description:
      'Spawn some gladiators woohoo',
    stack: ['Unity', '3DS Max', 'Photoshop', 'Substance Painter'],
    sourceCode: 'https://github.com/nicholasmerritt-acc/ludus_madness',
    livePreview: 'https://github.com',
    image: 'cleanfolio.png',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
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
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Unity',
  '3DS Max',
  'Photoshop',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nicholas.merritt@g.austincc.edu',
}

export { header, about, projects, skills, contact }
