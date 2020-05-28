import React, {Component, useEffect} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import MapInterface from "./containers/MapContainer"
import Signup from "./containers/RegisterContainer"
import Login from './containers/LoginContainer'
import Home from "./containers/LandingContainer"
import './App.css'
 import ga from 'react-ga'

const KEY = process.env.REACT_APP_TRACKING_CODE;
ga.initialize(`${KEY}`)

function App(){
    
  useEffect(()=>{
      ga.pageview(window.location.pathname + window.location.search)
  })
  
    return (
      <React.Fragment>
        <Switch>
          <Route  path="/login" component={Login} />
          <Route  path="/signup" component={Signup}/>
          <Route  path="/connect" component={MapInterface}/>
          <Route  path="/" component={Home} />
        </Switch>
      </React.Fragment>
  )
}

export default withRouter(App);
