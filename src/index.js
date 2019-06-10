import React from 'react';
import ReactDOM from 'react-dom';
// if you need IE 11 or Edge support, uncomment the next two import statements
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";
import "@webcomponents/webcomponentsjs/webcomponents-bundle";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
