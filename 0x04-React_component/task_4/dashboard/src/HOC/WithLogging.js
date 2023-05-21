import React from "react";

function withLogging(WrappedComponent) {
    const componentName = getDisplayName(WrappedComponent);
    class WithLogging extends React.Component {
        componentDidMount() {
          console.log(`Component ${componentName} is mounted`);
        }

        componentWillUnmount() {
          console.log(`Component ${componentName} is going to unmount`);
        }

        render() {
            return (<WrappedComponent {...this.props}/>);
        }
    }
    WithLogging.displayName = `WithLogging(${componentName})`;
    return WithLogging;
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

export default withLogging;
