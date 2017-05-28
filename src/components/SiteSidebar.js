import React, { Component } from 'react'
import Link from 'gatsby-link'

import { rhythm } from '../util/typography'

const profilePic = require('../../static/profile.jpg')

export default class SiteSidebar extends Component {
  render() {
    const { title, description, ...props } = this.props

    return (
      <div
        {...props}
      >
        <Link
          to="/"
        >
          <img
            src={profilePic}
            alt="Profile photo of the author"
            css={{
              width: '75px',
              height: '75px',
              borderRadius: '75px'
            }}
          />
        </Link>
        <h3
          css={{
            fontSize: '1.1em',
            fontWeight: '600',
            marginBottom: rhythm(.5)
          }}
        >
          {title}
        </h3>
        <p
          css={{
            fontSize: '.95em',
            color: '#333'
          }}
        >
          {description}
        </p>
        <nav>
          <ul
            css={{
              listStyleType: 'none',
              padding: '0 0 0 0',
              margin: '0 0 0 0'
            }}
          >
            <li
              css={{
                marginBottom: rhythm(.5)
              }}
            >
              <Link
                to="/about/"
                css={{
                  textDecoration: 'none'
                }}
              >
                About
              </Link>
            </li>
            <li
              css={{
                marginBottom: rhythm(.5)
              }}
            >
              <Link
                to="/consulting/"
                css={{
                  textDecoration: 'none'
                }}
              >
                Consulting
              </Link>
            </li>
            <li>
              <Link
                to="/speaking/"
                css={{
                  textDecoration: 'none'
                }}
              >
                Speaking
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
