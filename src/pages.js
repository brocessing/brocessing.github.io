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
