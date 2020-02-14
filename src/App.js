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
          <Route exact path="/" component={Landing}/>
          <Route  path="/signup" component={Signup}/>
        </Switch>
      </div>
  )}

  
}

export default withRouter(App);
