import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../static/css/reset.css'
import '../static/css/typography.css'
import '../static/css/base.css'

export default class Template extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="wrapper">
        {children}
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.any
}
