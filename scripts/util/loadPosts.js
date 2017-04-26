import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import chain from 'lodash.chain'
import filter from 'lodash.filter'

export default function loadPosts(options = {}) {
  options = {
    limit: Infinity,
    ...options
  }
}
