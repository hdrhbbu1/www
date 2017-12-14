const get = require('lodash.get')
const axios = require('axios')

const { urlFor, defaultOptions } = require('./defaultOptions')

async function onPostBuild({ graphql }, options = {}) {
  let { id, token, query, serialize } = {
    ...defaultOptions,
    ...options,
  }

  if (!id) {
    throw new Error('Please supply the Medium User ID.')
  }

  if (!token) {
    throw new Error('Please supply the Medium User Token.')
  }

  if (!query) {
    return Promise.resolve()
  }

  query = await run(graphql, query)
  const posts = serialize(query)

  for (p of posts) {
    const requestOptions = {
      method: 'POST',
      url: urlFor(id),
      data: p,
      json: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    await axios(requestOptions)
  }

  return Promise.resolve()
}

function run(graphql, query) {
  return graphql(query).then(r => {
    if (r.errors) {
      throw new Error(r.errors.join(''))
    }

    return r.data
  })
}

module.exports = {
  onPostBuild,
}
