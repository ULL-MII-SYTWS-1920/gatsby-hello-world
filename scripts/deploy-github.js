const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'git@github.com:ULL-MII-SYTWS-1920/gatsby-hello-world.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
