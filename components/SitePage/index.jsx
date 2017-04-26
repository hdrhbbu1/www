import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SiteSidebar from '../SiteSidebar'

import './style.css';

export default class SitePage extends Component {
  static propTypes = {
    route: PropTypes.object.isRequired
  }

  render() {
    const { route } = this.props;
    const post = route.page.data;

    return (
      <div>
        <SiteSidebar {...this.props} />
        <div className="content">
          <div className="main">
            <div className="main-inner">
              <div className="blog-page">
                <div className="text">
                  <h1>{post.title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
