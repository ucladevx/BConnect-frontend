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
      <div className="App">
        <Switch>
          <Route exact to="/" component={Landing}/>
          <Route  to="/signup" component={Signup}/>
          <Route  to="/login" component={Login} />
        </Switch>
      </div>
  )}

  
}

export default withRouter(App);
