import React, { Component } from 'react'
import AudioPlayer from '../AudioPlayer'

const ListEntry = ({urls, number, title, onClick}) => (
  <li onClick={onClick} style={{clear: 'both'}}>
    <AudioPlayer
      src={urls}
      className="audio-player"
      style={{float: 'left'}}
    />
    <span>
      #{number}: {title}
    </span>
  </li>
)

export default class EpisodeList extends Component {
  render() {
    const { episodes = [] } = this.props

    return (
      <ul className="show-episodes">
        {episodes.map(e => (
          <ListEntry key={e.number} {...e}/>
        ))}
      </ul>
    )
  }
}
