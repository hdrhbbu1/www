import React, { Component } from 'react'
import styled from 'styled-components'
import shaka from 'shaka-player'

const VideoContainer = styled.video`
  display: flex;
  width: 90%;
  margin: 0 auto 0 auto;
`

export default class Player extends Component {
  state = {
    ready: false,
    error: false,
  }

  componentDidMount() {
    shaka.polyfill.installAll()
    if (shaka.Player.isBrowserSupported()) {
      this.setState({ ready: true })
      this.player = new shaka.Player(this.video)

      if (this.props.host && this.props.mpd) {
        const url = [this.props.host, this.props.mpd].join('/')
        this.player.load(url)
          .then(::this.onLoadSuccess)
          .catch(::this.onError)
      }
    }
  }

  onLoadSuccess() {
  }

  onError() {
    this.setState({ ready: false, error: true })
  }

  render() {
    let videoRef = el => { this.video = el }
    return (
      <VideoContainer
        innerRef={videoRef}
        controls
      />
    )
  }
}
