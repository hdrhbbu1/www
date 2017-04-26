import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import formatDate from 'date-fns/format'

import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers';
import access from 'safe-access';
import { config } from 'config';
import truncateHTML from 'html-truncate'
import SiteSidebar from '../components/SiteSidebar';

class SiteIndex extends Component {
  render() {
    const pageLinks = [];
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, page => access(page, 'data.date')).reverse();
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post') {
        const title = access(page, 'data.title') || page.path;
        const description = truncateHTML(access(page, 'data.body'), 200);
        const datePublished = access(page, 'data.date');
        const category = access(page, 'data.category');

        pageLinks.push((
          <div className="blog-post" key={title}>
            <time dateTime={formatDate(datePublished, 'MMMM D, YYYY')}>
              {formatDate(datePublished, 'MMMM YYYY')}
            </time>
            <span style={{ padding: '5px' }} />
            <span className="blog-category">{category}</span>
            <h2><Link style={{ borderBottom: 'none' }} to={prefixLink(page.path)}>{title}</Link></h2>
            <p dangerouslySetInnerHTML={{ __html: description}}/>
            <Link className="readmore" to={prefixLink(page.path)}>Read</Link>
          </div>
        ));
      }
    });

    return (
      <div>
        <Helmet title={config.siteTitle} />
        <SiteSidebar {...this.props} />
        <div className="content">
          <div className="main">
            <div className="main-inner">
              {pageLinks}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SiteIndex.propTypes = {
  route: PropTypes.object,
};

export default SiteIndex;
