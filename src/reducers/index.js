import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';

const store = createStore(
    combineReducers({}),
    applyMiddleware(thunk),
);


export store;