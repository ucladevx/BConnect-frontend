import React, {Component} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import Landing from "./containers/LandingContainer"
import Signup from "./containers/RegisterContainer"
import Login from './containers/LoginContainer'


class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Switch>
          <Route  path="/login" component={Login} />
          <Route  path="/signup" component={Signup}/>
          <Route exact path="/" component={Landing}/>
        </Switch>
      </div>
  )}

  
}

export default withRouter(App);
