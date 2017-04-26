import path from 'path'
import toml from 'toml'
import moment from 'moment'
import Feed from 'feed'
import truncateHTML from 'html-truncate'

const configPath = path.join(__dirname, '../config.toml')
const config = fs.readFileSync(configPath).toString()

export default function run() {
  const now = moment()

  const author = {
    name: config.siteAuthor,
    email: config.siteEmail,
    link: `http://${config.domain}`
  }

  const feed = new Feed({
    title: config.blogTitle,
    id: `http://${config.domain}/`,
    description: config.siteDescr,
    copyright: `All rights reserved ${now.format('YYYY')}, Nicholas Young`,
    updated: now.toJSON(),
    feed: `http://${config.domain}/atom.xml`,
    author
  })

  posts.forEach(post => {
    const {
      data: { title, url },
      body
    } = post

    feed.addItem({
      title,
      date,
      link: url,
      description: truncateHTML(body, 200),
      content: body,
      author: [author]
    })
  })

  fs.writeFileSync('public/rss.xml', feed.render('rss-2.0'))
  fs.writeFileSync('public/atom.xml', feed.render('atom-1.0'))
}
