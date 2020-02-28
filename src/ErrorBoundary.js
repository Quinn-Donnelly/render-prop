import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    return {hasError: true}
  }

  render() {
    if(this.state.hasError) {
      return <this.props.Fallback />;
    }

    return this.props.children;
  }
}