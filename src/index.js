import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './reducers';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';

ReactDOM.render(
    <Provider store = {store}> 
        <Router> 
            <App />
        </Router>
    </Provider>

, document.getElementById('root'));



// ReactDOM.render(
//     <Provider store = {store}> 
//         <ConnectedRouter history={history}> 
//             <App />
//         </ConnectedRouter>
//     </Provider>
    
//     , document.getElementById('root'));
