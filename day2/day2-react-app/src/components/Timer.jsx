import React from "react";

class Timer extends React.Component {
    state = { seconds: 0 };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState((prev) => ({ seconds: prev.seconds + 1 }));
        }, 1000);
    }

    componentDidUpdate() {
        console.log(`Timer updated: ${this.state.seconds}`);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return <h2>Elapsed: {this.state.seconds}s</h2>;
    }
}

export default Timer;