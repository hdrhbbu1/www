import React, { Component } from 'react'
import PropTypes from 'prop-types'

export type Props = {
  id: string,
  reset: bool,
  preventDefault: bool,
  css?:  object,
  validate?: Function,
  context?: object,
}

export type State = {
  waiting: bool,
  success: bool,
  values: object,
  errors: object,
}

const hasErrors = (errors) => {
  const filtered = Object.keys(errors).filter(e => errors[e])
  if (filtered.length) {
    return true
  }
  return false
}

export default class Form extends Component<Props, State> {
  static defaultProps = {
    reset: true,
    preventDefault: true,
  }

  static childContextTypes = {
    form: PropTypes.object,
  }

  state = {
    waiting: false,
    success: false,
    values: {},
    errors: {},
  }

  /**
   * reset returns state to original defaults.
   */
  reset = () => {
    this.setState({ values: {}, errors: {} })
  }

  /**
   * onSend triggers form waiting.
   */
  onSend = () => {
    this.setState({ waiting: true })
  }

  /**
   * onSuccess clears form (if waiting).
   */
  onSuccess = () => {
    this.setState({ waiting: false, success: true })
    if (this.props.reset) {
      this.reset()
    }
  }

  /**
   * onFailure updates state with errors.
   */
  onFailure = (errors) => {
    this.setState({ waiting: false, errors })
  }

  /**
   * handleSubmit receives the form submit event,
   * processing and validating data along the way before
   * submitting it to the server if all fields are valid.
   */
  handleSubmit = (e) => {
    const { preventDefault, validate, id } = this.props
    const { values } = this.state

    if (preventDefault) {
      e.preventDefault()
    }

    if (validate) {
      const errors = validate(values)
      if (hasErrors(errors)) {
        return this.onFailure(errors)
      }
    }

    const body = new FormData()
    for (let field in values) {
      body.append(`signup[${field}]`, values[field])
    }

    this.onSend()

    fetch(`//madmimi.com/signups/subscribe/${id}`, {
      method: 'POST',
      mode: 'no-cors',
      body,
    }).then(() => {
      this.onSuccess()
    }).catch(error => {
      this.onFailure(error)
    })
  }
  
  /**
   * handleUpdate updates state on field update.
   */
  handleUpdate = (e) => {
    if (e.target.value) {
      const { values, errors } = this.state
      const nextState = {
        values: {
          ...values,
          [e.target.name]: e.target.value,
        }
      }

      if (typeof errors[e.target.name] !== 'undefined') {
        nextState.errors = {
          ...errors,
          [e.target.name]: undefined,
        }
      }

      this.setState(nextState)
    }
  }

  componentWillMount() {
    if (this.props.context) {
      this.setState(this.props.context)
    }
  }

  componentWillUnmount() {
    if (this.props.reset) {
      this.reset()
    }
  }

  get api() {
    return {
      handleSubmit: this.handleSubmit,
      handleUpdate: this.handleUpdate,
      values: this.state.values,
      errors: this.state.errors,
      success: this.state.success,
    }
  }

  getChildContext() {
    return {
      form: this.api,
    }
  }

  render() {
    console.log(this.state)
    const { css, children, render } = this.props

    if (children) {
      return children(this.api)
    }

    if (render) {
      return render(this.api)
    }

    return null
  }
}
