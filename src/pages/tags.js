import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import { rhythm } from '../util/typography'
import EmailRegistration from '../components/EmailRegistration'

export default class TagsRoute extends Component {
  render() {
    const { title } = this.props.data.site.siteMetadata
    const tags = this.props.data.allMarkdownRemark.group
    return (
      <div
        css={{
          marginBottom: rhythm(2),
        }}
      >
        <Helmet
          title={title}
        />
        <div>
          <Link
            to="/"
            css={{
              position: 'fixed',
              left: '20px',
              textAlign: 'center',
              padding: '8px 16px',
              color: '#999',
              borderRadius: '3px',
              background: '#F4F4F4',
              fontFamily: 'Open Sans',
              '@media(max-width: 900px)': {
                position: 'static',
                width: '85px',
                margin: '20px auto 0',
                textAlign: 'center',
                display: 'block',
              },
            }}
          >
            Home
          </Link>
        </div>
        <div
          css={{
            width: '90%',
            maxWidth: '800px',
            margin: '20px auto 0',
            textAlign: 'center',
            display: 'block',
          }}
        >
          <header
            css={{
              width: '90%',
              marginTop: rhythm(2),
              marginRight: 'auto',
              marginBottom: rhythm(2),
              marginLeft: 'auto',
            }}
          >
            <h1
              css={{
                fontSize: '2.8em',
                '@media(max-width: 900px)': {
                  fontSize: '2.2em',
                },
              }}
            >
              Tags
            </h1>
          </header>
          {tags.map(({ fieldValue }) => (
            <Link key={fieldValue} to={`/tags/${fieldValue}/`}>
              <h2>{fieldValue}</h2>
            </Link>
          ))}
        </div>
        <div>
          <hr
            css={{
              height: '1px',
              width: '75%',
              margin: '0 auto',
              marginTop: rhythm(2),
              marginBottom: rhythm(2),
            }}
          />
          <EmailRegistration/>
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query TagsPage {  
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000,
      filter: {
        frontmatter: {
          draft: { ne: true }
        }
      }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
