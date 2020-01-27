// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'package.json-to-credits',
  siteDescription: 'Turn any package.json into movie credits',
  siteUrl: 'https://n3ps.github.io',
  pathPrefix: '/package-json-credits',
  plugins: [{
    use: 'gridsome-plugin-tailwindcss'
  }]
}
