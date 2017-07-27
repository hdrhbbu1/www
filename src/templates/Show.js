import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Container from '../components/Container'
import SiteSidebar from '../components/SiteSidebar'
import Main from '../components/Main'

export default class ShowTemplate extends Component {
  render() {
    const {
      frontmatter: { title, description },
      html,
    } = this.props.data.markdownRemark

    return (
      <Container>
        <Helmet
          title={title}
          meta={[
            {
              name: 'description',
              content: description,
            },
          ]}
        />
        <SiteSidebar
          title={title}
          description={description}
        />
        <Main>
          <article>
            <h2
              css={{
                marginTop: 0,
              }}
            >
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
          </article>
        </Main>
      </Container>
    )
  }
}

export const pageQuery = graphql`
  query ShowTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
