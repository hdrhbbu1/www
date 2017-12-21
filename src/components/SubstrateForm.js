import 'isomorphic-fetch'
import React, { Component } from 'react'

export default class SubstrateForm extends Component {
  static defaultProps = {
    preventDefault: true,
  }

  state = {
    values: {},
    errors: {},
    success: false,
  }

  handleChange = (name: string) => (e) => {
    const { errors } = this.state
    const nextState = {}

    if (e.target.value) {
      nextState.values = { [name]: e.target.value }

      if (errors[name]) {
        nextState.errors = { [name]: undefined }
      }
    }

    this.setState(nextState)
  }

  handleSubmit = (e) => {
    const { preventDefault } = this.props

    if (preventDefault) {
      e.preventDefault()
    }

    const {
      errors,
      values: { name, email },
    } = this.state
  }

  render() {
    const { success, errors } = this.state
    return (
      <div
        css={{
          color: 'white',
          fontFamily: 'Open Sans, sans-serif',
        }}
      >
        {success ? (
          <p
            css={{
              fontFamily: 'Open Sans, sans-serif',
            }}
          >
            Thank you for subscribing. Your first issue will
            arrive soon.
          </p>
        ) : (
          <form
            onSubmit={this.handleSubmit}
            css={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              maxWidth: '500px',
            }}
          >
            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <label
                css={{
                  marginBottom: '1em',
                }}
              >
                {errors.name ? (
                  errors.name
                ) : (
                  'Name'
                )}
              </label>
              <input
                name="name"
                onChange={this.handleChange('name')}
                css={{
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px #999 solid',
                  color: 'white',
                }}
              />
            </div>
            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <label
                css={{
                  marginBottom: '1em',
                }}
              >
                {errors.email ? (
                  errors.email
                ) : (
                  'Email Address'
                )}
              </label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange('email')}
                css={{
                  background: 'transparent',
                  color: '#FFF',
                  border: 'none',
                  borderBottom: '1px #999 solid',
                }}
              />
            </div>
            <button
              css={{
                background: 'rgba(255, 255, 255, .4)',
                border: 'none',
                padding: '1em',
                color: 'white',
                pointer: 'cursor',
              }}
            >
              Register
            </button>
          </form>
        )}
      </div>
    )
  }
}
