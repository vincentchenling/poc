import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
import TestSuite from './TestSuite';
import './index.css';

//var element = React.createElement('h1', {className: 'greeting'}, 'Hello, world!');
//ReactDOM.render(element, document.getElementById('root'));

ReactDOM.render(
<div>
<TestSuite />
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//registerServiceWorker();
