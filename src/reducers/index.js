import {authReducer} from './auth'
import {mapReducer} from './map'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
//import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension';

const history = createBrowserHistory()
const composeEnhancers = composeWithDevTools({trace: true});

const createRootReducer = () => combineReducers({
    authReducer,
    mapReducer
})

const store = createStore(
    createRootReducer(),
    composeEnhancers(applyMiddleware(thunk))
)

export {store, history};


// const createRootReducer = (history) => combineReducers({
//   router: connectRouter(history),
//   authReducer,
//   mapReducer
// })

// const store = createStore(
//   createRootReducer(history),
//   composeEnhancers(
//     applyMiddleware(
//       thunk, routerMiddleware(history))
//   )
// )