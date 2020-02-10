import {authReducer} from './auth'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { connectRouter } from 'connected-react-router'
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

const history = createBrowserHistory()

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    authReducer
})

const store = createStore(
    createRootReducer(history),
    compose(
      applyMiddleware(routerMiddleware(history), thunk)
    )
  )

export {store, history};