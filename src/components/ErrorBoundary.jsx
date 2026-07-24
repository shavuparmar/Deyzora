import React, { Component } from 'react';
import { Button } from './ui/Button';
import { Container } from './ui/Container';
import { RefreshCcw } from 'lucide-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    // You can also log the error to an error reporting service here
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-[var(--color-bg-dark)]">
          <Container className="max-w-xl text-center flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-8 border border-red-500/20">
              <RefreshCcw className="w-10 h-10 text-red-500" />
            </div>
            
            <h1 className="text-4xl font-bold font-display text-white mb-6 tracking-tight">
              Something went wrong
            </h1>
            
            <p className="text-lg text-[var(--color-text-gray)] mb-10 leading-relaxed">
              An unexpected error has occurred. We've been notified and are looking into it.
            </p>
            
            <Button 
              onClick={() => window.location.reload()} 
              variant="primary" 
              size="lg"
            >
              Refresh Page
            </Button>
          </Container>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
