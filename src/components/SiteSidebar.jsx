import React, { Component } from 'react'
import Link from 'gatsby-link'

const profilePic = require('../../static/profile.jpg')

export default class SiteSidebar extends Component {
  render() {
    return (
      <div
        {...this.props}
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
        <h3>Nicholas Young</h3>
      </div>
    )
  }
}
