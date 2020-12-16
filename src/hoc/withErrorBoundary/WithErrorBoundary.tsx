import React, { Component, ElementType } from 'react';

const WithErrorBoundary = (WrappedComponent: ElementType) => (
    class extends Component {
        constructor(props: any) {
            super(props);
            this.state = {
                hasError: false,
            };
        }
        static getDerivedStateFromError() {
            return { hasError: true };
        }

        render() {
            const { hasError } = this.state;

            if (hasError) {
                return <div>Wystąpił jakiś nieoczekiwany problem....</div>;
            }
            return <WrappedComponent {...this.props} />;
        }
    }
);
export default WithErrorBoundary;
