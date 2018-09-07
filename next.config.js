const webpack = require('webpack')
const fetch = require('isomorphic-unfetch')
const fs = require('fs')
const moment = require('moment');
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
            query: {
              name: post.name
            }
          }
        }),
      {}
    )

    const pathMap = Object.assign({}, pages, {
	    '/': { page: '/' },
	    '/about': { page: '/about'}
    })

	  let pageList = []
    for(let path in pathMap ) {
      pageList.push(path)
    }

    let xml = ``
	  xml += '<?xml version="1.0" encoding="UTF-8"?>'
	  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

    for(let page of pageList) {
	    let modDate = moment().format('YYYY-MM-DD')
	    xml += '<url>'
	    xml += `<loc>${'https://gyumindev.github.io'+page}</loc>`
	    xml += `<lastmod>${modDate}</lastmod>`
	    xml += `<changefreq>always</changefreq>`
	    xml += `<priority>0.5</priority>`
	    xml += '</url>'
    }
	  xml += '</urlset>'

	  let robot = 'User-agent: *\n' + 'Disallow: /'

	  fs.writeFileSync('./static/sitemap.xml', xml)
	  fs.writeFileSync('./static/robot.txt', robot)

	  // combine the map of post pages with the home
    return pathMap
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
