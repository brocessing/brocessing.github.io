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
      caption: `Un runner game qui se joue avec les sourcils`,
      img: `previews/eyebro.png`,
      alt: `Preview du jeu Eyebro`
    },
    {
      name: `AR Music Experiment`,
      url: ` https://twitter.com/hugopiquemal/status/892807824908136449`,
      caption: `Générateur de boucles musicales via réalité augmentée`,
      img: `previews/armusic.jpg`,
      alt: `Preview de l'AR Music Experiment`
    },
    {
      name: `Arnaud Juracek [Portfolio]`,
      url: `http://arnaudjuracek.fr`,
      caption: `Un portfolio à contrôler à plusieurs en même temps`,
      img: `previews/rno.jpg`,
      alt: `Preview de arnaudjuracek.fr`
    },
    {
      name: `Superflux`,
      url: `https://antoine.cool/projects/superflux`,
      caption: `Des objets commandés avec le visage`,
      img: `previews/superflux.jpg`,
      alt: `Preview du projet Superflux`
    }, 
    {
      name: `Three.js Neon Experiment`,
      url: `neon01.mp4`,
      caption: `Effet néon reproduit dans le navigateur`,
      video: `previews/neon01.mp4`,
      video_img: ``,
      alt: `Vidéo de néon`
    }
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
