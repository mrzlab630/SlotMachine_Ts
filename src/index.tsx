import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';


ReactDOM.render(
    <ErrorBoundry>
    <App />
    </ErrorBoundry>, document.getElementById('root'));

