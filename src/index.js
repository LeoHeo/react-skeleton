import React from 'react'; // ES6 이하에서 var react = require("react")와 같은것
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');    
ReactDOM.render(
    <App />,
    rootElement
);
