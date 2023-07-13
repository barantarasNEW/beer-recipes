import { Component, ErrorInfo, ReactNode } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import './ErrorBoundary.scss';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
};

class ErrorBoundary extends Component<ErrorBoundaryProps & WithTranslation, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps & WithTranslation) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    const { t } = this.props;

    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1 className="error-boundary__title">
            {t('somethingWentWrong')}
          </h1>

          <p>{this.state.error && this.state.error.toString()}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary);
