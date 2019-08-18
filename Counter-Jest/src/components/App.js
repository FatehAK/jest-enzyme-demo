import React from 'react';

class App extends React.Component {
    state = {
        counter: 0,
        error: false
    };

    incrementCount() {
        if (this.state.error) {
            this.setState({
                error: false
            });
        }
        this.setState((state) => ({
            counter: state.counter + 1,
        }));
    }

    decrementCount() {
        if (this.state.counter === 0) {
            this.setState({
                error: true
            });
        } else {
            this.setState((state) => ({
                counter: state.counter - 1,
            }));
        }
    }

    render() {
      return (
          <div className="app" data-test="component-app">
              <h1 data-test="counter-display">Count: {this.state.counter}</h1>
              <button onClick={() => this.incrementCount()} data-test="increment-button">Increment</button>
              <button onClick={() => this.decrementCount()} data-test="decrement-button">Decrement</button>
              {(this.state.error) && (
                  <div data-test="error-display">Count can't be less than 0</div>
              )}
          </div>
      );
    }
}

export default App;
