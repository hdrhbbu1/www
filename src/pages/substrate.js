import React, { Component } from 'react'
import Link from 'gatsby-link'

import { rhythm } from '../util/typography'
import SubstrateForm from '../components/SubstrateForm'

export default class Substrate extends Component {
  render() {
    const editions = this.props.data.editions.edges
      .map(e => e.node)

    return (
      <div>
        <div
          css={{
            margin: '0 0 0 0',
            background: 'black',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            css={{
              margin: '0 auto',
              width: '90%',
            }}
          >
            <h1
              css={{
                margin: '0 0 0 0',
                color: 'white',
                fontSize: '7em',
                textTransform: 'uppercase',
                marginBottom: rhythm(1),
              }}
            >
              Substrate
            </h1>
            <p
              css={{
                color: 'white',
                fontFamily: 'Open Sans, sans-serif',
              }}
            >
              A weekly newsletter charting the winds of futurism,
              accessibility, and technology. Together, we build a
              better world.
            </p>
            <SubstrateForm/>
          </div>
        </div>
        <div
          css={{
            paddingBottom: rhythm(1),
          }}
        >
          <div
            css={{
              margin: '0 auto',
              maxWidth: '90%',
            }}
          >
            <h2>Editions</h2>
            <ul
              css={{
                listStyleType: 'none',
                margin: '0 0 0 0',
              }}
            >
              {editions.map(e => (
                <li>
                  <Link to={''}>
                    <h3>{e.frontmatter.title}</h3>
                    <p>{e.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          css={{
            background: 'black',
          }}
        >
          <footer
            css={{
              background: 'black',
              display: 'flex',
              color: 'rgba(255, 255, 255, .8)',
              maxWidth: '90%',
              margin: '0 auto',
              paddingTop: rhythm(2),
              paddingBottom: rhythm(2),
            }}
          >
            <div>
              <p>
                Test
              </p>
            </div>
            <div>
              <p>
                Test
              </p>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query SubstrateEditions {
    editions: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { draft: { ne: true } }
      }
    ) {
      edges {
        node {
          timeToRead
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            rawDate: date
          }
        }
      }
    }
  }
`
