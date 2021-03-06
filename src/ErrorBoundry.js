import React from 'react'
import PropTypes from 'prop-types';
class ErrorBoundry extends React.Component {
  static defaultProps = {
    item: ''
  }

  state = {
    hasError: false
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }
  render() {
    if (this.state.hasError) {
      return <h2>{`Could not display this ${this.props.item} section`}</h2>;
    }
    return this.props.children;
  }
}

ErrorBoundry.propTypes = {
  item: PropTypes.string
}

export default ErrorBoundry;