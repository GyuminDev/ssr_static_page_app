const webpack = require('webpack')
const fetch = require('isomorphic-unfetch')
const isProd = process.env.NODE_ENV === 'production'
const assetPrefix = isProd ? '' : ''

module.exports = {
  async exportPathMap () {
    // we fetch our list of posts, this allow us to dynamically generate the exported pages
    const response = await fetch('https://api.github.com/users/gmground/repos')
    const postList = await response.json()


    // tranform the list of posts into a map of pages with the pathname `/post/:id`
    const pages = postList.reduce(
      (pages, post) =>
        Object.assign({}, pages, {
          [`/post/${post.name}`]: {
            page: '/post',
            query: { name: post.name }
          }
        }),
      {}
    )

    // combine the map of post pages with the home
    return Object.assign({}, pages, {
      '/': { page: '/' },
      '/about': { page: '/about'}
    })
  },
  assetPrefix: assetPrefix,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix)
      }),
    )
    return config
  }
}
