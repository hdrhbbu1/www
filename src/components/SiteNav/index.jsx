import React, { Component } from 'react'
import { Link } from 'react-router'

import { prefixLink } from 'gatsby-helpers'
import './style.css'

export default class SiteNav extends Component {
  render() {
    return (
      <nav className="blog-nav">
        <ul>
          <li>
            <Link
              to={prefixLink('/')}
              activeClassName="current"
              onlyActiveOnIndex
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              to={prefixLink('/about/')}
              activeClassName="current"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={prefixLink('/consulting/')}
              activeClassName="current"
            >
              Consulting
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
