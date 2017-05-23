import React, { Component } from 'react'
import Helmet from 'react-helmet'

export default class PageTemplate extends Component {
  render() {
    const { html, frontmatter } = this.props.data.markdownRemark
    return (
      <div>
        <Helmet
          title={frontmatter.title}
        />
        <h2>{frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }}/>
      </div>
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
