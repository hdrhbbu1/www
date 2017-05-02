import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Howl } from 'howler'

import Pause from '../../components/Pause'
import Play from '../../components/Play'

export default class AudioPlayer extends Component {
  static defaultProps = {
    preload: false,
    html5: true
  }

  constructor(props) {
    super(props)
    this.state = {
      playing: false
    }
  }

  componentWillMount() {
    this._setupHowler()
  }

  _setupHowler() {
    this.howl = new Howl({
      onload: ::this._onLoad,
      onloaderror: ::this._onError,
      onplay: ::this._onPlay,
      onpause: ::this._onPause,
      ...this.props
    })
  }

  _onLoad() {
  }

  _onError() {
  }

  _onPlay() {
    this.setState(() => ({ playing: true }))
  }

  _onPause() {
    this.setState(() => ({ playing: false }))
  }

  _handleClick() {
    console.log(this.state.playing)
    if (this.howl) {
      if (this.howl.state() !== 'loaded') {
        this.howl.load()
      }

      if (this.howl.playing()) {
        this.howl.pause()
      } else {
        this.howl.play()
      }
    }
  }

  render() {
    return (
      <div onClick={::this._handleClick}>
        {this.state.playing ? <Pause/> : <Play/>}
      </div>
    )
  }
}
