import React, { Component } from 'react'
import shaka from 'shaka-player'

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
      <video
        ref={videoRef}
        controls
        css={{
          width: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
    )
  }
}
