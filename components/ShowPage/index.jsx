import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SiteSidebar from '../SiteSidebar'
import EpisodeList from '../../containers/EpisodeList'

import './style.css'

export default class ShowPage extends Component {
  static propTypes = {
    route: PropTypes.object.isRequired
  }

  render() {
    const { route } = this.props
    const show = route.page.data
    return (
      <div>
        <SiteSidebar {...this.props} />
        <div className="content">
          <div className="main">
            <div className="main-inner">
              <div className="blog-page">
                <div className="text">
                  <h1>{show.title}</h1>
                  <div className="show-info">
                    <img className="show-artwork" src={show.artwork}/>
                    <div dangerouslySetInnerHTML={{ __html: show.body }} />
                  </div>
                  <EpisodeList episodes={show.episodes}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

