import React, {Component} from 'react';
import { Route, Switch } from 'react-router'
import MapContainer from "./containers/MapContainer"
import SignupContainer from "./containers/RegisterContainer"
import LoginContainer from './containers/LoginContainer'


class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact to="/login" render={()=>(<LoginContainer />)} />
          <Route exact to="/signup" render={()=>(<SignupContainer />)}/>
          <Route to="/" render={()=>(<MapContainer />)}/>
        </Switch>
      </div>
  )}

  
}

export default App;
