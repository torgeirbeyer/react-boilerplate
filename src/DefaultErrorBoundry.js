import React from 'react'
import propTypes from 'prop-types'

export default class DefaultErrorBoundry extends React.Component {
  state = {
    isError: false
  }

  static getDerivedStateFromError() {
    return { isError: true }
  }

  static propTypes = {
    children: propTypes.node.isRequired
  }

  render() {
    const { isError } = this.state
    const { children } = this.props
    return isError ? <span>Ups, something wnet wrong</span> : children
  }
}
