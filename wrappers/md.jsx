import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { config } from 'config'
import SitePost from '../components/SitePost'
import ShowPage from '../components/ShowPage'
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

    if (layout === 'show') {
      template = <ShowPage {...this.props}/>
    } else if (layout === 'page') {
      template = <SitePage {...this.props} />;
    } else {
      template = <SitePost {...this.props}/>
    }

    return (
      <div>
        <Helmet title={`${post.title} - ${config.siteTitle}`} />
        {template}
      </div>
    );
  }
}
