import { Component, type ErrorInfo, type ReactNode } from 'react'

type ErrorFallback =
  | ReactNode
  | ((error: Error, reset: () => void) => ReactNode)

interface ErrorBoundaryProps {
  children: ReactNode
  fallback: ErrorFallback
  onReset?: () => void
}

interface ErrorBoundaryState {
  error: Error | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('[HIV experience] Unhandled render error', error, info.componentStack)
  }

  reset = (): void => {
    this.setState({ error: null })
    this.props.onReset?.()
  }

  render(): ReactNode {
    const { error } = this.state
    if (!error) return this.props.children

    const { fallback } = this.props
    if (typeof fallback === 'function') {
      return fallback(error, this.reset)
    }

    return fallback
  }
}
