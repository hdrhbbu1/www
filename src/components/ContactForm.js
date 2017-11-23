import 'isomorphic-fetch'

import React, { Component } from 'react'

const encode = data => Object.keys(data).map(key =>
  encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
).join('&')

export default class ContactForm extends Component {
  constructor() {
    super()
    this.state = {
      submitting: false,
      success: false,
      values: {},
    }
  }

  onSuccess(r) {
    this.setState({ submitting: false, success: true })
  }

  onFailure() {
    this.setState({ submitting: false, success: false })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ submitting: true })

    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({
        'form-name': 'contact',
        ...this.state.values,
      }),
    })
      .then(this.onSuccess.bind(this))
      .catch(this.onFailure.bind(this))
  }

  handleChange(e) {
    const values = {
      ...this.state.values,
      [e.target.name]: e.target.value,
    }
    this.setState({ values })
  }

  render() {
    const { success, failure, submitting } = this.state
    return (
      <div>
        {success ? (
          <h3>Your message was successfully sent.</h3>
        ) : undefined}
        {failure ? (
          <h3>Something went wrong.</h3>
        ) : undefined}
        <div
          css={{
            opacity: submitting ? 0.6 : 1.0,
          }}
        >
          <form
            name="contact"
            onSubmit={this.handleSubmit.bind(this)}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <p
              css={{ display: 'none' }}
              aria-hidden="true"
              class="hidden"
            >
              <label>Don’t fill this out: <input name="bot-field"/></label>
            </p>
            <div
              css={{
                marginBottom: '1em',
              }}
            >
              <h3
                css={{
                  fontSize: '1.1em',
                }}
              >Your Name</h3>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                onChange={this.handleChange.bind(this)}
                css={{
                  width: '90%',
                  padding: '.7em',
                  background: 'rgba(0, 0, 0, .04)',
                  border: 'none',
                }}
              />
            </div>
            <div
              css={{
                marginBottom: '1em',
              }}
            >
              <h3
                css={{
                  fontSize: '1.1em',
                }}
              >Email Address</h3>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={this.handleChange.bind(this)}
                css={{
                  width: '90%',
                  padding: '.7em',
                  background: 'rgba(0, 0, 0, .04)',
                  border: 'none',
                }}
              />
            </div>
            <div>
              <h3
                css={{
                  fontSize: '1.1em',
                }}
              >Message</h3>
              <textarea
                name="message"
                placeholder="Message"
                onChange={this.handleChange.bind(this)}
                css={{
                  width: '90%',
                  padding: '.7em',
                  background: 'rgba(0, 0, 0, .04)',
                  border: 'none',
                  minHeight: '100px',
                }}
              />
            </div>
            <button
              css={{
                marginTop: '1em',
                border: 'none',
                padding: '.5em',
                background: 'rgba(0, 0, 0, .07)',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}
