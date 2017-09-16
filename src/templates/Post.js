import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import './Post.css'
import { rhythm } from '../util/typography'
import TagList from '../components/TagList'
import EmailRegistration from '../components/EmailRegistration'
import { toAbsolute } from '../util/helpers'

export default class PostTemplate extends Component {
  render() {
    const { siteUrl } = this.props.data.site.siteMetadata

    const {
      fields: { slug },
      excerpt,
      html,
      frontmatter: { title, tags, rawDate, date, image, keywords },
    } = this.props.data.markdownRemark

    const url = toAbsolute(siteUrl, slug)

    const feature = toAbsolute(siteUrl, image && image.childImageSharp
      ? image.childImageSharp.responsiveResolution.src
      : '/share.jpg')

    return (
      <div
        css={{
          marginBottom: rhythm(2),
        }}
      >
        <Helmet
          title={title}
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
              content: excerpt,
            },
            {
              name: 'og:description',
              content: excerpt,
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
              content: excerpt,
            },
            {
              name: 'keywords',
              content: keywords,
            },
          ]}
        />
        <div>
          <Link
            to="/"
            css={{
              position: 'fixed',
              left: '20px',
              textAlign: 'center',
              padding: '8px 16px',
              color: '#1999',
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
        <article
          css={{
            width: '90%',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          <header
            css={{
              display: 'block',
              textAlign: 'center',
              marginTop: rhythm(2),
              marginRight: 'auto',
              marginBottom: rhythm(2),
              marginLeft: 'auto',
            }}
          >
            <Link
              to={slug}
              css={{
                textDecoration: 'none',
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
                {title}
              </h1>
            </Link>
            <div
              css={{
                marginTop: rhythm(2),
                fontSize: '.9em',
                fontFamily: 'Open Sans, sans-serif',
                '@media(max-width: 800px)': {
                  fontSize: '1em',
                },
              }}
            >
              <span>Published on <time dateTime={rawDate}>{date}</time></span>
            </div>
          </header>
          <div
            css={{
              margin: '0 auto',
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
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
        <div
          css={{
            width: '70%',
            maxWidth: '800px',
            fontStyle: 'italic',
            margin: '0 auto',
            textAlign: 'center',
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '.9rem',
          }}
        >
          <p>
            Nicholas Young is a husband, father, technologist, and rare illness advocate currently hailing from Denver, Colorado. He lives amid the snow-covered mountains with his wife, Susan, and daughter, Sloan.
          </p>
        </div>
        {tags && tags.length > 0 ? (
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
            <TagList tags={tags}/>
          </div>
        ) : undefined}
      </div>
    )
  }
}

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        rawDate: date
        tags
        image {
          childImageSharp {
            responsiveResolution(width: 600) {
              src
            }
          }
        }
        keywords
      }
    }
  }
`
