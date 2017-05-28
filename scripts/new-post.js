import path from 'path'
import inquirer from 'inquirer'
import fs from 'fs-extra'
import slug from 'slug'
import format from 'date-fns/format'

const basePath = '../content/articles'

const template = (title, date) => `
---
title: ${title}
date: ${date.toISOString()}
---
`

const slugify = (title, date) => [
  format(date, 'YYYY-MM-DD'),
  slug(title).toLowerCase()
].join('-')

const run = () => inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What should we call this new post?'
  }
]).then(({ title }) => {
  const now = new Date()
  const slug = slugify(title, now)
  const output = path.join(__dirname, basePath, slug, 'index.md')

  return fs.ensureFile(output)
    .then(() => {
      fs.writeFileSync(output, template(title, now))
    })
    .then(() => `Done! ${output} has been created.`)
})

if (!module.parent) {
  run()
    .then(console.log)
    .catch(console.error)
}
