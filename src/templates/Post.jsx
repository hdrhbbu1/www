import React, { Component } from 'react'

export default class PostTemplate extends Component {
  render() {
    return (
      <div>{JSON.stringify(this.props)}</div>
    )
  }
}

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(slug: { eq: $slug }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`
