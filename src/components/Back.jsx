import React from 'react'
import Link from 'gatsby-link'

const Back = () => (
  <Link
    to="/"
    css={{
      padding: '5px',
      position: 'fixed',
      background: 'rgba(0, 0, 0, .4)',
      color: 'white',
      zIndex: 5,
      left: '5%',
      top: '5%'
    }}
  >
    Go Home
  </Link>
)

export default Back
