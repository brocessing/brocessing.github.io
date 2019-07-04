const contents = {
  title: `Brocessing`,
  description: `Angry creative tech bureau based in Paris`,
  email: `b0ss@brocessing.men`,
  url: `brocessing.men`,
  thumbnail: `thumbnail.png`,
  message: 'Angry creative tech bureau\nBased in Paris',
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

const pages = [
  {
    output: 'index.html',
    content: contents,
    layout: 'layouts/index.hbs'
  }
]

module.exports = pages
