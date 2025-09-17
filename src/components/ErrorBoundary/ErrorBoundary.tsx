import { type ErrorInfo, type ReactNode, Component } from 'react';
import styles from './ErrorBoundary.module.css';

interface Props {
  children: ReactNode;
}

export default class ErrorBoundary extends Component<Props> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error Boundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorBoundary}>
          <h1>Something went wrong.</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
