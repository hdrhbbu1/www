import React, { Component } from 'react'

export default class PageTemplate extends Component {
  render() {
    return (
      <div>{JSON.stringify(this.props)}</div>
    )
  }
}

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(slug: { eq: $slug }) {
      html
      frontmatter {
        title
      }
    }
  }
`
