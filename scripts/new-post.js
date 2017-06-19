import path from 'path'
import inquirer from 'inquirer'
import fs from 'fs-extra'
import { slugify } from 'transliteration'
import format from 'date-fns/format'

const basePath = '../content/articles'

const template = (title, date) => `---
title: ${title}
date: "${date.toISOString()}"
layout: post
draft: true
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus leo, interdum venenatis lacinia in, tincidunt a dolor. Phasellus gravida felis ac tortor laoreet commodo. In sodales quam eleifend bibendum fringilla. Maecenas viverra, risus nec luctus scelerisque, tortor metus sagittis nulla, at consequat ligula metus vel eros. Donec nec odio ornare, vehicula arcu at, condimentum erat. Nullam sollicitudin, metus eget consectetur venenatis, ex eros faucibus enim, ut molestie risus lorem id sapien. Nullam commodo molestie odio, ultrices tempor sem vestibulum vitae. Fusce ut pulvinar leo. Nullam quis neque a neque elementum posuere id at nulla. Vestibulum vehicula ex a diam condimentum suscipit.
`

const createSlug = (title, date) => [
  format(date, 'YYYY-MM-DD'),
  slugify(title)
].join('-')

const run = () => inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What should we call this new post?'
  }
]).then(({ title }) => {
  const now = new Date()
  const slug = createSlug(title, now)
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
