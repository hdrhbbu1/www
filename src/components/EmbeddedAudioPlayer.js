import React, { Component } from 'react'
import { Howl } from 'howler'

import Pause from './Pause'
import Play from './Play'
import { hhmmss } from '../util/helpers'

export default class EmbeddedAudioPlayer extends Component {
  static defaultProps = {
    src: [],
    html5: true,
  }

  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      isPlaying: false,
      timecode: '0:00',
      duration: 0,
      position: 0,
    }
    this.setup = this.setup.bind(this)
  }

  update() {
    if (this.howl) {
      const position = this.howl.seek()
      this.setState({
        position,
        progress: (position / this.state.duration) * 100,
        timecode: hhmmss(position),
      })
    }
  }

  setup() {
    const onPlaybackStatus = ::this.onPlaybackStatus
    this.howl = new Howl({
      ...this.props,
      onerror: ::this.onError,
      onload: ::this.onLoad,
      onplay: onPlaybackStatus,
      onpause: onPlaybackStatus,
    })
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  pause() {
    if (this.howl) {
      this.howl.pause()
    }
  }

  play() {
    if (this.howl) {
      this.howl.play()
      this.timer = setInterval(this.update.bind(this), 1000)
    }
  }

  onLoad() {
    this.setState({ duration: this.howl.duration() })
  }

  onError(err) {
    console.error(err)
  }

  onPlaybackStatus() {
    this.setState({ isPlaying: !this.state.isPlaying })
  }

  componentWillMount() {
    this.setup()
  }

  componentWillUnmount() {
    if (this.howl) {
      this.stop()
      this.howl = null
    }
  }

  handleClick() {
    const operation = (this.state.isPlaying ?
      this.pause : this.play).bind(this)
    operation()
  }

  render() {
    const { src } = this.props
    const isPlaying = this.state.isPlaying

    return (
      <div
        css={{
          height: '50px',
          display: 'flex',
          alignItems: 'stretch',
          background: 'rgba(0, 0, 0, .2)',
          ...this.props.css
        }}
      >
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '.5rem',
          }}
          onClick={::this.handleClick}
        >
          {isPlaying ? <Pause/> : <Play/>}
        </div>
        <div
          css={{
            position: 'relative',
            height: '50px',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <div
            css={{
              position: 'absolute',
              height: '100%',
              width: `${this.state.progress}%`,
              alignItems: 'center',
              background: 'red',
            }}
          />
        </div>
      </div>
    )
  }
}
