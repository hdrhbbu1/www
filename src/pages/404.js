import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Container from '../components/Container'
import SiteSidebar from '../components/SiteSidebar'
import Main from '../components/Main'

export default class NotFound extends Component {
  render() {
    const {
      title,
      description
    } = this.props.data.site.siteMetadata
    return (
      <Container>
        <Helmet
          title="Not Found"
        />
        <SiteSidebar
          title={title}
          description={description}
        />
        <Main>
          <h2
            css={{
              marginTop: 0,
            }}
          >
            404: Not Found</h2>
          <p>
            The page you're looking for could not be found.
            Maybe try going <Link to="/">home</Link> instead?
          </p>
        </Main>
      </Container>
    )
  }
}

export const pageQuery = graphql`
  query NotFound {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
