const path = require('path')
const inquirer = require('inquirer')
const fs = require('fs-extra')
const { safeDump } = require('js-yaml')
const { slugify } = require('transliteration')
const format = require('date-fns/format')

const basePath = '../content'

const template = (frontmatter) => `---
${frontmatter}---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus leo, interdum venenatis lacinia in, tincidunt a dolor. Phasellus gravida felis ac tortor laoreet commodo. In sodales quam eleifend bibendum fringilla. Maecenas viverra, risus nec luctus scelerisque, tortor metus sagittis nulla, at consequat ligula metus vel eros. Donec nec odio ornare, vehicula arcu at, condimentum erat. Nullam sollicitudin, metus eget consectetur venenatis, ex eros faucibus enim, ut molestie risus lorem id sapien. Nullam commodo molestie odio, ultrices tempor sem vestibulum vitae. Fusce ut pulvinar leo. Nullam quis neque a neque elementum posuere id at nulla. Vestibulum vehicula ex a diam condimentum suscipit.
`
const run = () => inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What should we call this new content?'
  },
  {
    type: 'list',
    name: 'layout',
    message: 'Choose a layout',
    choices: ['post', 'page'],
  }
]).then(({ title, layout }) => {
  const now = new Date()
  const slug = slugify(title)
  const contentDir = path.resolve(__dirname, basePath)
  const root = layout === 'post'
    ? path.join(contentDir, 'articles', format(now, 'YYYY/MM')) : contentDir
  const filename = layout === 'post'
    ? path.join(slug, 'index.md') : `${slug}.md`
  const output = path.join(root, filename)

  return fs.ensureFile(output)
    .then(() => fs.writeFileSync(output, template(safeDump({
      title,
      slug,
      layout: layout.toLowerCase() === 'post' ? 'post' : 'page',
      draft: true,
      date: format(now, 'YYYY-MM-DD'),
    }))))
    .then(() => `Done! ${output} has been created.`)
})

if (!module.parent) {
  run()
    .then(console.log)
    .catch(console.error)
}
