import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { rhythm } from '../util/typography'
import { toAbsolute } from '../util/helpers'
import SubstrateForm from '../components/SubstrateForm'

const Headline = styled.h1`
  margin: 0 0 0 0;
  color: white;
  font-size: 7em;
  text-transform: uppercase;
  margin-bottom: ${rhythm(1)};
  position: relative;
  &:before, &:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:before {
    clip: rect(44px, 450px, 56px, 0);
  }

  @media(max-width: 1000px) {
    font-size: 4em;
  }
`

export default class Substrate extends Component {
  render() {
    const editions = this.props.data.editions.edges
      .map(e => e.node)

    const { siteUrl } = this.props.data.site.siteMetadata
    const url = toAbsolute(siteUrl, '/substrate/')
    const feature = toAbsolute(siteUrl, '/substrate.jpg')
    
    const title = 'Substrate'
    const description = 'A weekly newsletter charting the winds of futurism, accessibility, and technology. Together we build a better world.'
    const keywords = ''

    return (
      <div>
        <Helmet
          title={title}
          description={description}
          meta={[
            {
              name: 'twitter:title',
              content: title,
            },
            {
              name: 'og:title',
              content: title,
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:description',
              content: description,
            },
            {
              name: 'og:description',
              content: description,
            },
            {
              name: 'og:url',
              content: url,
            },
            {
              name: 'twitter:image',
              content: feature,
            },
            {
              name: 'og:image',
              content: feature,
            },
            {
              name: 'description',
              content: description,
            },
            {
              name: 'keywords',
              content: keywords,
            },
          ]}
        >
          <title>Substrate</title>
        </Helmet>
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
            <Headline
              data-text="SUBSTRATE"
            >
              Substrate
            </Headline>
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
        {/*
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
                display: 'flex',
              }}
            >
              {editions.map(e => (
                <li
                  css={{
                    width: '30%',
                  }}
                >
                  <h3>
                    <Link to={e.fields.slug}>{e.frontmatter.title}</Link>
                  </h3>
                  <p>{e.excerpt}</p>
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
        */}
      </div>
    )
  }
}

export const pageQuery = graphql`
  query SubstrateEditions {
    site {
      siteMetadata {
        siteUrl
      }
    }
    editions: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { draft: { ne: true }, layout: { eq: "substrate" } }
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
