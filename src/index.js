import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

class Root extends Component {
    state = {  }
    render() {
        return (
            <App />
        );
    }
}

ReactDOM.render(<Root />, document.querySelector('#app'))