import React, { Component } from 'react'
import Helmet from 'react-helmet'

import Container from '../components/Container'
import SiteSidebar from '../components/SiteSidebar'
import Main from '../components/Main'
import ContactForm from '../components/ContactForm'

export default class ContactRoute extends Component {
  render() {
    const {
      title,
      description,
    } = this.props.data.site.siteMetadata

    return (
      <Container>
        <Helmet
          title="Contact"
        />
        <SiteSidebar
          title={title}
          description={description}
        />
        <Main>
          <h2
            css={{
              marginTop: 0,
            }}
          >
            Contact
          </h2>
          <div
            css={{
              marginBottom: '1em',
            }}
          >
            <p>
              Whether you have a comment, question, or need anything else,
              use the form below to get in touch.
            </p>
            <p>
              While I would like to read and respond to every email, some will
              inevitably be missed. Feel free to email again if I&rsquo;ve missed you
              before.
            </p>
          </div>
          <ContactForm/>
        </Main>
      </Container>
    )
  }
}

export const pageQuery = graphql`
  query ContactRoute {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
