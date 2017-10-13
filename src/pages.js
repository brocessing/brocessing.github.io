const contents = {
  title: `Brocessing`,
  description: `Angry creative tech bureau based between Paris and Strasbourg`,
  email: `b0ss@brocessing.men`,
  url: `brocessing.men`,
  thumbnail: `thumbnail.png`,
  message: 'Angry creative tech bureau\nBased between Paris and Strasbourg',
  contact: [
    {
      name: `Github`,
      url: `https://github.com/brocessing`
    },
    {
      name: `Twitter`,
      url: `https://twitter.com/brocessing_men`
    },
    {
      name: `Mail`,
      url: `mailto:b0ss@brocessing.men`
    }
  ]
}

const links = {
  title: `Projets sous stéroïdes`,

  links: [
    {
      name: `Eyebro`,
      url: `https://brocessing.github.io/eyebro/`,
      caption: `Un runner game qui se joue avec les sourcils`
    },
    {
      name: `AR Music Experiment`,
      url: ` https://twitter.com/hugopiquemal/status/892807824908136449`,
      caption: `Générateur de boucles musicales via réalité augmentée`
    },
    {
      name: `Arnaud Juracek [Portfolio]`,
      url: `http://arnaudjuracek.fr`,
      caption: `Un portfolio à contrôler à plusieurs en même temps`
    },
    {
      name: `Bonus`,
      url: `puckey-star.png`,
      caption: `Un like pas comme les autres...`
    },   
  ]
}

const pages = [
  {
    output: 'index.html',
    content: contents,
    layout: 'layouts/index.hbs'
  },
  {
    output: 'growcessing.html',
    content: links,
    layout: 'layouts/growcessing.hbs'
  }
]

module.exports = pages
