const webpack = require('webpack')
const fetch = require('isomorphic-unfetch')
const fs = require('fs')
const moment = require('moment');
const isProd = process.env.NODE_ENV === 'production'
const assetPrefix = isProd ? '' : ''


module.exports = {
  async exportPathMap () {
    // Repo 목록 Fetch
    const response = await fetch('https://api.github.com/users/gmground/repos')
    const postList = await response.json()

    // Repo 제목에 대응된 Object Array 생성
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

	  // page 병합
    const pathMap = Object.assign({}, pages, {
	    '/': { page: '/' },
	    '/about': { page: '/about'}
    })

	  // Sitemap.xml 동적생성
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

	  let robot = 'User-agent: *\n' + 'Allow: /'

	  fs.writeFileSync('./static/sitemap.xml', xml)
	  fs.writeFileSync('./static/robots.txt', robot)


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
