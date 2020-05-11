import React, {Component} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import MapInterface from "./containers/MapContainer"
import Signup from "./containers/RegisterContainer"
import Login from './containers/LoginContainer'
import Home from "./containers/LandingContainer"
import './App.css'


class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <React.Fragment>
        <Switch>
          <Route  path="/login" component={Login} />
          <Route  path="/signup" component={Signup}/>
          <Route  path="/connect" component={MapInterface}/>
          <Route  path="/" component={Home} />
        </Switch>
      </React.Fragment>
  )}

  
}

export default withRouter(App);
