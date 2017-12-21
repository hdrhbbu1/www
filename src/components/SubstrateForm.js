import React, { Component } from 'react'

export default class SubstrateForm extends Component {
  state = {
    values: {},
    errors: {},
    success: false,
  }

  validate = (nextState) => {
    const errors = {}

    if (!nextState.email) {
      errors.email = 'Please provide your email'
    }
    if (!nextState.name) {
      errors.name = 'Please provide your name'
    }

    return errors
  }

  handleChange = (name: string) => (e) => {
    const nextState = { values: { [name]: e.target.name } }
    const errors = this.validate(nextState)

    if (Object.keys(errors).length > 0) {
      nextState.errors = errors
    }

    this.setState(nextState)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, email } = this.state.values
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
                handleChange={this.handleChange('name')}
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
                handleChange={this.handleChange('email')}
                css={{
                  background: 'transparent',
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
