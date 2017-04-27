import React from 'react'
import branch from 'recompose/branch'
import renderComponent from 'recompose/renderComponent'

import Play from '../components/Play'
import Pause from '../components/Pause'

const PlayPause = () => branch(
  p => p.status !== 'playing',
  renderComponent(Pause),
  renderComponent(Play)
)

export default PlayPause
