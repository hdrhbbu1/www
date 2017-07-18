import 'isomorphic-fetch'

import React, { Component } from 'react'
import { Form, Text } from 'react-form'

import { rhythm } from '../util/typography'

const emailRegex = /.+\@.+\..+/g

const EmailSubscribeForm = ({ handleSubmit }) => (
  <Form
    onSubmit={handleSubmit}
    validate={({ name, email }) => ({
      name: !name ? 'Name is required' : undefined,
      email: email && emailRegex.test(email) ? undefined : 'Email is required',
    })}
  >
    {({ submitForm }) => (
      <form
        onSubmit={submitForm}
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          '@media(max-width: 800px)': {
            flexDirection: 'column',
          }
        }}
      >
        <Text
          css={{
            border: 'none',
            background: 'rgba(0, 0, 0, .05)',
            padding: '10px',
            minWidth: '150px',
            textAlign: 'center',
            marginRight: '.5em',
            '@media(max-width: 800px)': {
              marginRight: '0',
              marginBottom: '.5em',
            }
          }}
          placeholder="name"
          field="name"
        />
        <Text
          css={{
            border: 'none',
            background: 'rgba(0, 0, 0, .05)',
            padding: '10px',
            minWidth: '150px',
            textAlign: 'center',
            marginRight: '.5em',
            '@media(max-width: 800px)': {
              marginRight: '0',
              marginBottom: '.5em',
            }
          }}
          placeholder="email address"
          field="email"
        />
        <button
          css={{
            border: 'none',
            background: 'rgba(0, 0, 0, .05)',
            padding: '10px',
            textAlign: 'center',
          }}
        >
          Subscribe
        </button>
      </form>
    )}
  </Form>
)

const Title = ({ children }) => (
  <h3
    css={{
      fontSize: '1.1em',
      '@media(min-width: 800px)': {
        fontSize: '1.3em',
      }
    }}
  >
    {children}
  </h3>
)

class EmailRegistration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      done: false,
      errored: false,
    }
  }

  handleSubmit({ name, email }) {
    const body = new FormData()
    body.append('signup[name]', name)
    body.append('signup[email]', email)

    fetch('//madmimi.com/signups/subscribe/43842', {
      method: 'POST',
      mode: 'no-cors',
      body
    })
      .then(() => this.setState({ done: true }))
      .catch(() => this.setState({ errored: true }))
  }

  render() {
    const { done, errored } = this.state
    return (
      <div
        css={{
          textAlign: 'center',
          marginBottom: rhythm(1),
        }}
      >
        {!done ? (
          <Title>Receive content like this in your inbox!</Title>
        ) : undefined}
        {done ? (
          <Title>Thanks for subscribing!</Title>
        ) : undefined}
        {errored ? (
          <Title>Something went wrong. Please check the form below.</Title>
        ) : undefined}
        <EmailSubscribeForm
          handleSubmit={this.handleSubmit.bind(this)}
        />
      </div>
    )
  }
}

export default EmailRegistration
