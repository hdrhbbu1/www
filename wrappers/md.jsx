import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { config } from 'config'
import SitePost from '../components/SitePost'
import SitePage from '../components/SitePage'

export default class MarkdownWrapper extends Component {
  static propTypes = {
    route: PropTypes.object
  }

  render() {
    const { route } = this.props;
    const post = route.page.data;
    const layout = post.layout;
    let template;

    if (layout !== 'page') {
      template = <SitePost {...this.props} />;
    } else {
      template = <SitePage {...this.props} />;
    }

    return (
      <div>
        <Helmet title={`${post.title} - ${config.siteTitle}`} />
        {template}
      </div>
    );
  }
}
