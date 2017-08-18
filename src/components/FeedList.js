import React, { Component } from 'react'

export default class FeedList extends Component {
  render() {
    const feeds = this.props.feeds ? this.props.feeds : []
    return (
      <ul
        css={{
          listStyleType: 'none',
          padding: '0 0 0 0',
          margin: '0 0 1rem 0',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {feeds.length === 0 ? undefined : (
          feeds.map((f, i) => (
            <li
              key={i}
              css={{
                marginRight: '1rem',
                '&:last-child': {
                  marginRight: 0,
                },
              }}
            >
              <a
                href={f.url}
                onClick={e => {
                  e.preventDefault()
                  window.open(e.target.href)
                }}
              >Subscribe via {f.title}</a>
            </li>
          ))
        )}
      </ul>
    )
  }
}
