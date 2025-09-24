import { type ErrorInfo, type ReactNode, Component } from 'react';
import styles from './ErrorBoundary.module.css';
import { FetchError } from '~/api/customErrors';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string | null;
  isFetchError: boolean;
  method: string | null;
  url: string | undefined;
  statusCode: number | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    errorMessage: null,
    isFetchError: false,
    method: null,
    url: undefined,
    statusCode: null,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorMessage: error.message });
    if (error instanceof FetchError) {
      const { method, url } = error.request;
      const { status: statusCode } = error.response;
      this.setState({
        isFetchError: true,
        method,
        url,
        statusCode,
      });
    }
    console.error(
      `Error Boundary caught an error\n`,
      error,
      `\n\nComponent stack:`,
      errorInfo.componentStack
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorBoundary}>
          <h2>Ooops, something went wrong</h2>
          {this.state.isFetchError ? (
            <p className={styles.errorBody}>
              <span className={styles.method}>{this.state.method}</span> request
              to{' '}
              <a href={this.state.url} className={styles.url}>
                {this.state.url}
              </a>{' '}
              has failed with{' '}
              <span className={styles.statusCode}>{this.state.statusCode}</span>{' '}
              status code
            </p>
          ) : (
            <p className={styles.errorBody}>{this.state.errorMessage}</p>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
