import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    render() {
        return (
            <div className="app" data-test="component-app">foo</div>
         );
    }
}

export default hot(module)(App);
