import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, createStore } from 'react-redux';
import { store } from 'reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Provider store = {store}> 
    <App />
</Provider>

, document.getElementById('root'));


serviceWorker.unregister();
