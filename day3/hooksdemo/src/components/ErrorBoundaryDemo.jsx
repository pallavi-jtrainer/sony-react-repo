import React from 'react';

class ErrorBoundaryDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        console.log("Error caught in Error Boundary:", error);
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log("Error details:", info);
    }

    render() {
        if (this.state.hasError) {
            return <h2>Something went wrong.</h2>;
        }

        return this.props.children;
    }
}

export default ErrorBoundaryDemo;