import React, { Component } from 'react'
import { connect } from 'react-redux'

import PlayButton from '../../components/PlayButton'
import { play, pause, resume } from '../../modules/player'

import './style.css'

class Player extends Component {
  render() {
    if (!this.props.visible) {
      return <div></div>
    }

    return (
      <div className="player">
        <PlayButton
          status={this.props.status}
          onClick={::this._togglePlay}
        />
      </div>
    )
  }

  _togglePlay() {
    const { status } = this.props

    if (status === 'playing') {
      this.props.pause()
    }

    if (status === 'paused') {
      this.props.resume()
    }

    if (status === 'stopped') {
      this.props.play()
    }
  }
}

const mapState = ({player}) => player 
const mapDispatch = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
  resume: () => dispatch(resume())
})

export default connect(mapState, mapDispatch)(Player)
